import { useEffect, useState } from 'react';
import { Commission } from '../../types/customTypes';
import { commissionApi } from '../../../../services/commissions';
import { Helmet } from 'react-helmet';
import Modal from '../../components/Modal/Modal';
import { useModal } from '../../hooks/useModal';
import FormCommission from './components/Form/FormCommission';
import Table from '../../components/Table/Table';
import dayjs from 'dayjs';
import Loader from '../../components/Loader';
import React from 'react';
import { MobileBody } from '../../components/Mobile/MobileBody';
import { FormMobile } from './components/Mobile/FormMobile';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Toast } from '../Avisos/components/Form/FormAdvertising';
import Swal from 'sweetalert2';

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
        `${dayjs(commission.schedule.startHour).format('HH:mm')} - ${dayjs(
          commission.schedule.endHour,
        ).format('HH:mm')}`,
    ],
    [
      '',
      (commission: Commission) => {
        return trash(commission.id);
      },
    ],
  ]);

  const tableColumnsMobile = new Map<string, (advertising: any) => void>([
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
  ]);

  const isMobile = useIsMobile();

  const handleClickDelete = (id: number) => {
    Swal.fire({
      title: '¿Estás seguro de eliminar esta comision?',
      text: 'No se podrá recuperar la comision.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar.',
    }).then((result) => {
      if (result.isConfirmed) {
        commissionApi
          .delete(id)
          .then(() => {
            Toast.fire({
              icon: 'success',
              title: 'Se ha eliminado la comision',
            });
            updateCommissionsTable();
          })
          .then(() => updateCommissionsTable())
          .catch((error) => console.error(error));
      }
    });
  };

  const trash = (id: number) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="-3 -2 24 24"
        className=" cursor-pointer"
        onClick={() => {
          handleClickDelete(id);
        }}
      >
        <path
          fill="currentColor"
          d="M6 2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-.133l-.68 10.2a3 3 0 0 1-2.993 2.8H5.826a3 3 0 0 1-2.993-2.796L2.137 7H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4zm10 2H2v1h14V4zM4.141 7l.687 10.068a1 1 0 0 0 .998.932h6.368a1 1 0 0 0 .998-.934L13.862 7h-9.72zM7 8a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"
        />
      </svg>
    );
  };

  const onRowPress = (commission: Commission) => {
    handleClickDelete(commission.id);
  };

  return (
    <>
      <Helmet>
        <title>Administrador de cartelera | Comisiones</title>
      </Helmet>
      <div className={`w-full h-full ${!isMobile && 'mx-[3%]'}`}>
        {isMobile ? (
          <MobileBody
            dataJson={commissionsJSON}
            tableColumns={tableColumnsMobile}
            isOpen={isOpen}
            onCloseClick={closeModal}
            openModal={openModal}
            loading={loading}
            title="Comisiones"
            placeholder="Buscar Comision"
            handleRowPress={(comision) => onRowPress(comision)}
          >
            <FormMobile
              setCommissionsJSON={updateCommissionsTable}
              closeModal={closeModal}
            />
          </MobileBody>
        ) : (
          <div className="w-full h-full">
            <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px] mt-[20px]">
              Comisiones
            </h1>
            {loading ? (
              <Loader />
            ) : (
              <div className="mt-[-70px]">
                <Table
                  dataJSON={commissionsJSON}
                  columns={tableColumns}
                  placeholder="Buscar Comision"
                />
                <div className="flex justify-end">
                  <Modal
                    isOpen={isOpen}
                    closeModal={closeModal}
                    openModal={openModal}
                    label="AGREGAR COMISIONES"
                  >
                    <FormCommission
                      commissionsJSON={commissionsJSON}
                      updateCommissionsTable={updateCommissionsTable}
                      closeModal={closeModal}
                    />
                  </Modal>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Comisiones;
