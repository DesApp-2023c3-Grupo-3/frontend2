import Button from '../../components/Buttons/Button';
import Modal from '../../components/Modal';
import FormAdvertising from './components/Modal/FormAdvertising';
import { useModal } from '../../hooks/useModal';
import { Advertising } from '../../types/customTypes';
import React from 'react';
import { advertisingsAPI } from '../../../../services/advertisings';
import Table from '../../components/Table/Table';
import { abbreviateSectorName } from '../../utils/AbbreviateSectorName';
import dayjs from 'dayjs';

function Avisos() {
  const [advertisingsJSON, setAdvertisingsJSON] = React.useState<Advertising[]>(
    [],
  );

  const [editRow, setEditRow] = React.useState<Advertising>();
  const [isEditing, setIsEditing] = React.useState(false);

  const handleRowClick = (advertising: any) => {
    setEditRow(advertising);
    setIsEditing(true);
    openModal();
  };

  const { isOpen, openModal, closeModal } = useModal();

  const idRolUser = 1; // TODO: id del rol del usuario logeado

  const GetData = () => {
    advertisingsAPI
      .getAll(idRolUser)
      .then((r) => {
        setAdvertisingsJSON(r.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  React.useEffect(() => {
    GetData();
  }, []);

  const user = (name: string) => {
    return (
      <div className="m-2 flex justify-center items-center text-white text-[32px] font-[500] bg-[#2C9CBF] rounded-full w-[60px] h-[60px] text-center">
        {name}
      </div>
    );
  };

  const sectores = (advertising: Advertising) =>
    advertising.advertisingSectors
      .map((sector) => sector.sector.name)
      .map((s) => abbreviateSectorName(s))
      .join('-');

  const dayOrder = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];

  const schedule = (advertising: Advertising) =>
    advertising.advertisingSchedules
      .map((schedule) => schedule.schedule.dayCode)
      .map((d) => d.charAt(0).toUpperCase() + d.slice(1).toLowerCase())
      .sort((a, b) => {
        return dayOrder.indexOf(a) - dayOrder.indexOf(b);
      })
      .join('-');

  const starthour = (advertising: Advertising) =>
    dayjs(advertising.advertisingSchedules[0].schedule.startHour).format(
      'HH:mm',
    );

  const endhour = (advertising: Advertising) =>
    dayjs(advertising.advertisingSchedules[0].schedule.endHour).format('HH:mm');

  const tableColumns = new Map<string, (advertising: any) => void>([
    [
      '',
      (advertising: Advertising) => {
        return user(advertising.user.role.name.charAt(0));
      },
    ],
    [
      'Nombre',
      (advertising: Advertising) => {
        return advertising.name;
      },
    ],
    [
      'Sector/es',
      (advertising: Advertising) => {
        return sectores(advertising);
      },
    ],
    [
      'Días',
      (advertising: Advertising) => {
        return schedule(advertising);
      },
    ],
    [
      'Programacion',
      (advertising: Advertising) => {
        return starthour(advertising) + '-' + endhour(advertising);
      },
    ],
    [
      'Estado',
      (advertising: Advertising) => {
        return status(advertising);
      },
    ],
  ]);

  const status = (advertising: Advertising) => {
    return (
      <div
        className={`w-[40px] h-[12px] ml-5 rounded-[8px] ${
          statusClasses[advertising.status] || 'bg-[#727272]'
        }`}
      ></div>
    );
  };

  const statusClasses: any = {
    active: 'bg-[#74C91E]',
    deprecated: 'bg-[#727272]',
    pending: 'bg-[#C2B222]',
    today: 'bg-[#C2B222]',
  };

  return (
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
        <div className="flex justify-end">
          <Button
            onClick={openModal}
            active={true}
            label={'NUEVO AVISO'}
            type={0}
          />
          <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            component={
              <FormAdvertising
                setAdvertisingsJSON={GetData}
                closeModal={closeModal}
                isCreate={!isEditing}
                advertising={editRow}
              />
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Avisos;
