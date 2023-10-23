import { FormEvent, useEffect, useRef, useState, useTransition } from 'react';
import TableMain from './components/Table/TableMain';
import Modal from '../../components/Modal';
import Button from '../../components/Buttons/Button';
import { userApi } from '../../../../services/users';
import { useModal } from '../../hooks/useModal';
import Sectores from '../../components/Sectores'

function Usuarios() {
  const [usersJSON, setUsersJSON] = useState<User[]>([]);
  const [_, loadUsers] = useTransition();
  const { isOpen, openModal, closeModal } = useModal();
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const dniRef = useRef(null)
  const emailRef = useRef(null)
  const [selectedSector, setSelectedSector] = useState<Sector>({
    id: -1,
    name: 'Sector/es',
    topic: 'Undefined'
  });
  
  const handleSelectedSectorChange = (newSelectedSector: any) => {
    setSelectedSector(newSelectedSector);
  };
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
    const updatedUsers: any = await userApi.getAll();
    setUsersJSON((updatedUsers?.data as User[]) || []);
  };

  const createNewUser = (e: FormEvent) => {
    e.preventDefault()
    setUsersJSON(
      [
        {
          id: -1,
          name: 'abc',//usernameRef.current?.value,
          dni: 'abc',//dniRef.current.value,
          password: 'abc'//passwordRef.current.value,
        }, ...usersJSON
      ])
    closeModal()
  }

  useEffect(() => {
    loadUsers(() => {
      updateUsersTable();
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
          <Modal //Para llamar al modal necesitar usar el hook useModal para el estado del modal
            isOpen={isOpen}
            closeModal={closeModal}
          >
            <form className="grid grid-cols-2 p-12">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="DNI"
                  ref={dniRef}
                  className="text-[20px] font-[400] tracking-[-0.4px] rounded-[30px] bg-[#D9D9D9] flex w-[365px] h-[50px] px-[40px] py-[12px] items-center"
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  ref={passwordRef}
                  className="text-[20px] font-[400] tracking-[-0.4px] rounded-[30px] bg-[#D9D9D9] flex w-[365px] h-[50px] px-[40px] py-[12px] items-center"
                />
                <input
                  type="text"
                  placeholder="Nombre"
                  ref={usernameRef}
                  className="text-[20px] font-[400] tracking-[-0.4px] rounded-[30px] bg-[#D9D9D9] flex w-[365px] h-[50px] px-[40px] py-[12px] items-center"
                />
                <input
                  type="text"
                  placeholder="Rol del usuario"
                  ref={emailRef}
                  className="text-[20px] font-[400] tracking-[-0.4px] rounded-[30px] bg-[#D9D9D9] flex w-[365px] h-[50px] px-[40px] py-[12px] items-center"
                />
                  {/*

<Sectores selectedSector={selectedSector} onSelectedSectorChange={handleSelectedSectorChange} campos={[]}/>
*/}
                <select id="role" name="role" className="hidden">
                  <option value="">A</option>
                  <option value="">B</option>
                </select>
              </div>
              <div className="flex flex-col items-center gap-8">
                <article className="text-center">
                  <img
                    src="https://cdn.discordapp.com/attachments/1143714208404471908/1165447224805826601/Usuario.png?ex=6546e24f&is=65346d4f&hm=9d49d67482396f4d8b724cfc900d52b7a47382794abf63292d137ebafb7b0bc2&"
                    alt="User preview"
                  />
                  <h4 className="text-xl font-bold mt-2">Administrador</h4>
                  <span className="">Administrador</span>
                </article>
                <Button
                  label="Guardar"
                  onClick={createNewUser}
                  active={true}
                  type={0}
                />
              </div>
            </form>
          </Modal>
          <div className="flex justify-between mt-[2em] mx-[4.5em]">
            <Button
              onClick={openModal}
              active={true}
              type={0}
              label="NUEVO USUARIO"
              className="bg-[#2C9CBF] rounded-[15px] select-none py-[16px] w-[236px] text-white font-[600] text-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
