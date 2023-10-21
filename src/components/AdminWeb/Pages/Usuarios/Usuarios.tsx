import { useEffect, useState, useTransition } from 'react';
import { User } from '../../types/customTypes';
import TableMain from './components/Table/TableMain';
//import ModalCreateCommission from './components/Modal/ModalCreateCommission';
import { userApi } from '../../../../services/users';

function Usuarios() {
  const [usersJSON, setUsersJSON] = useState<any[]>([]);
  const [_, loadUsers] = useTransition();

  /*
    `${dayjs(item.schedule.startHour).format('hh:mm')} - ${dayjs(
        item.schedule.endHour,
      ).format('hh:mm')}`
  */

  const tableColumns = new Map<string, (user: any) => void>([
    [
      'DNI',
      (user: any) => {
        return user.dni;
      },
    ],
    [
      'Nombre',
      (user: any) => {
        return user.name;
      },
    ],
    [
      'Rol',
      (user: any) => {
        return user.password;
      },
    ],
    [
      'Creación',
      (user: any) => {
        return user.id;
      },
    ],
    [
      'LOL',
      (user: any) => {
        return user.id + 6;
      },
    ],
  ]);

  const updateUsersTable = async () => {
    const updatedCommissions: any = await userApi.getAll();
    setUsersJSON((updatedCommissions?.data as User[]) || []);
  };

  useEffect(() => {
    loadUsers(() => {
      //updateUsersTable();
    });
  }, []);

  return (
    <div className="flex flex-col w-100 pl-12">
      <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px] mt-[20px]">
        Usuarios
      </h1>
      <div className="mt-[-70px] mr-[3.1%]">
        <TableMain rowArray={usersJSON} columns={tableColumns} />
        <div className="flex justify-end">
          {/*<ModalCreateCommission
            commissionsJSON={usersJSON}
            setUsersJSON={usersJSON}
          />*/}
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
