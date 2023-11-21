import Loader from '../../../../components/Loader';
import ModalMobile from '../../../../components/Modal/ModalMobile';
import Table from '../../../../components/Table/Table';

interface MobileBodyProps {
  dataJson: any[];
  tableColumns: Map<string, (data: any) => void>;
  handleRowClick?: (data: any) => void;
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
  isOpen,
  onCloseClick,
  openModal,
  loading,
  children,
  title,
  placeholder,
}: MobileBodyProps) {
  return (
    <>
      <section className="mt-[3em] w-full h-full">
        <div className="flex items-center">
          <h1 className="text-[3em] font-[700] text-[#484848] tracking-[-1.28px] ml-[25px]">
            {title}
          </h1>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="mt-[-70px]">
            <Table
              dataJSON={dataJson}
              columns={tableColumns}
              onRowClick={handleRowClick}
              placeholder={placeholder}
            />
          </div>
        )}
        {!loading && (
          <div
            id="modal"
            className="flex mt-[4em] mr-[1em] pb-[3em] items-center justify-end z-[4]"
          >
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
