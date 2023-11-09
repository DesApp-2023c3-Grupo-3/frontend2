import { useEffect, useState, useTransition } from 'react';
import { Commission } from '../../types/customTypes';
import { commissionApi } from '../../../../services/commissions';
import { Helmet } from 'react-helmet';
import Modal from '../../components/Modal/Modal';
import { useModal } from '../../hooks/useModal';
import FormCommission from './components/Modal/FormCommission';
import Table from '../../components/Table/Table';
import dayjs from 'dayjs';
import Loader from '../../components/Loader';

function Comisiones() {
  const [commissionsJSON, setCommissionsJSON] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const updateCommissionsTable = async () => {
    setLoading(true);
    try {
      const updatedCommissions: any = await commissionApi.getAll();
      setCommissionsJSON((updatedCommissions?.data as Commission[]) || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateCommissionsTable();
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
    <>
      <Helmet>
        <title>Administrador de cartelera | Comisiones</title>
      </Helmet>
      <div className="flex flex-col w-full pl-12">
        <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px] mt-[20px]">
          Comisiones
        </h1>
        {loading ? (
          <Loader />
        ) : (
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
        )}
      </div>
    </>
  );
}

export default Comisiones;
