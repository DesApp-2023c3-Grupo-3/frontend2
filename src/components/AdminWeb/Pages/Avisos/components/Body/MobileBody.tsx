import Modal from '../../../../components/Modal';
import Table from '../../../../components/Table/Table';
import { Advertising } from '../../../../types/customTypes';
import FormAdvertising from '../Form/FormAdvertising';

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
}: MobileBodyProps) {
  return (
    <>
      <section className="mx-[3%]">
        <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px] mt-[20px]">
          Avisos
        </h1>

        <div className="mt-[-70px] ">
          <Table
            dataJSON={advertisingsJSON}
            columns={tableColumns}
            onRowClick={handleRowClick}
          />
          <div className="flex justify-end"></div>
        </div>
      </section>
    </>
  );
}
