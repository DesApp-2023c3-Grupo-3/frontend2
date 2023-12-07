import Loader from '../Loader';
import ModalMobile from '../Modal/ModalMobile';
import Table from '../Table/Table';

interface MobileBodyProps {
  dataJson: any[];
  tableColumns: Map<string, (data: any) => void>;
  handleRowClick?: (data: any) => void;
  handleRowPress?: (data: any) => void;
  isOpen: boolean;
  onCloseClick: () => void;
  openModal: () => void;
  loading: boolean;
  children: React.ReactElement;
  title: string;
  placeholder: string;
}

export function MobileBody({
  dataJson,
  tableColumns,
  handleRowClick,
  handleRowPress,
  isOpen,
  onCloseClick,
  openModal,
  loading,
  children,
  title,
  placeholder,
}: MobileBodyProps) {
  const isMiniMobile = window.matchMedia('(max-width: 320px)').matches;

  return (
    <>
      <section className="w-screen h-screen">
        <div className="flex items-center translate-y-[3em]">
          <h1
            className={` text-[3em] font-[700] text-[#484848] tracking-[-1.28px] translate-x-[40px] ${
              isMiniMobile && 'text-[24px]'
            }`}
          >
            {title}
          </h1>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className=" translate-y-[-1.5em]">
            <Table
              dataJSON={dataJson}
              columns={tableColumns}
              onRowClick={handleRowClick}
              onRowPress={handleRowPress}
              placeholder={placeholder}
            />
          </div>
        )}
        {!loading && (
          <div id="modal" className="flex items-center justify-end z-[4]">
            <ModalMobile
              isOpen={isOpen}
              closeModal={onCloseClick}
              openModal={openModal}
              label={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="z-[10]"
                >
                  <path
                    fill="white"
                    d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                  />
                </svg>
              }
            >
              {children}
            </ModalMobile>
          </div>
        )}
      </section>
    </>
  );
}
