import { useEffect, useState, useTransition } from 'react';
import { Commission } from '../../types/customTypes';
import { commissionApi } from '../../../../services/commissions';
import Modal from '../../components/Modal';
import { useModal } from '../../hooks/useModal';
import FormCommission from './components/Modal/FormCommission';
import Table from '../../components/Table/Table';
import dayjs from 'dayjs';

function Comisiones() {
  const [commissionsJSON, setCommissionsJSON] = useState<any[]>([]);
  const [_, loadCommissions] = useTransition();

  const updateCommissionsTable = async () => {
    const updatedCommissions: any = await commissionApi.getAll();
    setCommissionsJSON((updatedCommissions?.data as Commission[]) || []);
  };

  useEffect(() => {
    loadCommissions(() => {
      updateCommissionsTable();
    });
  }, []);

  const { isOpen, openModal, closeModal } = useModal();

  const tableColumns = new Map<string, (advertising: any) => void>([
    [
      'Materia',
      (commission: Commission) => {
        return commission.subject.name;
      },
    ],
    [
      'Comisión',
      (commission: Commission) => {
        return commission.name;
      },
    ],
    [
      'Aula',
      (commission: Commission) => {
        return commission.classroom.name;
      },
    ],
    [
      'Horario',
      (commission: Commission) =>
        `${dayjs(commission.schedule.startHour).format('hh:mm')} - ${dayjs(
          commission.schedule.endHour,
        ).format('hh:mm')}`,
    ],
  ]);

  return (
    <div className="flex flex-col w-100 pl-12">
      <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px] mt-[20px]">
        Comisiones
      </h1>
      <div className="mt-[-70px] mr-[3.1%]">
        <Table dataJSON={commissionsJSON} columns={tableColumns} />
        <div className="flex justify-end">
          <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            openModal={openModal}
            label="AGREGAR COMISIONES"
          >
            <FormCommission
              commissionsJSON={commissionsJSON}
              setCommissionsJSON={setCommissionsJSON}
              closeModal={closeModal}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Comisiones;
