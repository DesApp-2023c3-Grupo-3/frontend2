import Loader from '../../../../components/Loader';
import ModalMobile from '../../../../components/Modal/ModalMobile';
import Table from '../../../../components/Table/Table';
import { Advertising } from '../../../../types/customTypes';
import { FormMobile } from '../Form/Mobile/FormMobile';

interface MobileBodyProps {
  advertisingsJSON: any[];
  tableColumns: Map<string, (data: any) => void>;
  handleRowClick: (data: any) => void;
  isOpen: boolean;
  onCloseClick: () => void;
  openModal: () => void;
  GetData: () => void;
  isEditing: boolean;
  editRow?: Advertising;
  loading: boolean;
}

export function MobileBody({
  advertisingsJSON,
  tableColumns,
  handleRowClick,
  isOpen,
  onCloseClick,
  openModal,
  GetData,
  isEditing,
  editRow,
  loading,
}: MobileBodyProps) {
  return (
    <>
      <section className="mx-[3%] mt-[3em] w-full">
        <div className="flex items-center">
          <h1 className="text-[3em] font-[700] text-[#484848] tracking-[-1.28px] ml-[25px]">
            Avisos
          </h1>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="mt-[-70px]">
            <Table
              dataJSON={advertisingsJSON}
              columns={tableColumns}
              onRowClick={handleRowClick}
              placeholder="Buscar Aviso"
            />
            <div className="flex justify-end"></div>
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
              <FormMobile
                setAdvertisingsJSON={GetData}
                closeModal={onCloseClick}
                isCreate={!isEditing}
                advertising={editRow}
              />
            </ModalMobile>
          </div>
        )}
      </section>
    </>
  );
}
