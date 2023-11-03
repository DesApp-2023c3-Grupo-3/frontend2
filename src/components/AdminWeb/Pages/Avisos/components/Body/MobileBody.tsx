import Button from '../../../../components/Buttons/Button';
import Table from '../../../../components/Table/Table';
import { Advertising } from '../../../../types/customTypes';

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
      <section className="mx-[3%] mt-[3em]">
        <div className="flex items-center">
          <h1 className="text-[3em] font-[700] text-[#484848] tracking-[-1.28px] ml-[25px]">
            Avisos
          </h1>
          <div className="ml-[15px]">
            <Button
              onClick={() => console.log('asd')}
              active={false}
              type={4}
              label={'Nuevo'}
            />
          </div>
        </div>

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
