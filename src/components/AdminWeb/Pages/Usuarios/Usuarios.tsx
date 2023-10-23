import { FormEvent, useEffect, useRef, useState, useTransition } from 'react';
import TableMain from './components/Table/TableMain';
import Modal from '../../components/Modal';
import Button from '../../components/Buttons/Button';
import { userApi } from '../../../../services/users';
import { useModal } from '../../hooks/useModal';
import Sectores from '../Comisiones/components/Modal/Sectores';

function Usuarios() {
  const [isPending, startTransition] = useTransition();
  const [usersJSON, setUsersJSON] = useState<User[]>([]);
  const [hasLoadedUsers, setHasLoadedUsers] = useState<boolean>(false);
  const [_, updateState] = useState({});
  const { isOpen, openModal, closeModal } = useModal();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dniRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [selectedSector, setSelectedSector] = useState<Sector>({
    id: -1,
    name: 'Rol del usuario',
    topic: 'Undefined',
  });

  const tableColumns = new Map<string, (user: any) => void>();
  tableColumns.set('DNI', (user: User) => user.dni);
  tableColumns.set('Nombre', (user: User) => user.name);
  tableColumns.set('Rol', () => selectedSector.name);
  tableColumns.set('Contraseña', (user: User) => user.password);
  tableColumns.set('Estado', (user: User) => user.id);

  const handleSelectedSectorChange = (newSelectedSector: any) => {
    setSelectedSector(newSelectedSector);
  };

  const hasValidUser = () => {
    return (
      !invalidUsername() &&
      !invalidPassword() &&
      !invalidDNI() &&
      selectedSector.id !== -1
    );
  };

  const invalidUsername = () => usernameRef.current?.value.trim() === '';
  const invalidPassword = () => passwordRef.current?.value.trim() === '';
  const invalidDNI = () => dniRef.current?.value.trim() === '';

  const createNewUser = (e: FormEvent) => {
    e.preventDefault();
    if (!hasValidUser()) return;

    setUsersJSON([
      {
        id: selectedSector.id,
        name: usernameRef.current?.value + '',
        dni: dniRef.current?.value + '',
        password: passwordRef.current?.value + '',
      },
      ...usersJSON,
    ]);
    closeModal();
  };

  const updateUsersTable = async () => {
    const updatedUsers: any = await userApi.getAll().catch(() => {
      return [];
    });

    startTransition(() => {
      setUsersJSON((updatedUsers?.data as User[]) || []);
      setHasLoadedUsers(true);
    });
  };

  useEffect(() => {
    if (!hasLoadedUsers) updateUsersTable();
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
            <>
              <h1 className="text-7xl font-bold px-12 mt-8 mb-4">
                Crear nuevo usuario
              </h1>
              <form className="grid grid-cols-2 px-12">
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
                    onChange={() => updateState({})}
                    className="text-[20px] font-[400] tracking-[-0.4px] rounded-[30px] bg-[#D9D9D9] flex w-[365px] h-[50px] px-[40px] py-[12px] items-center"
                  />
                  <input
                    type="text"
                    placeholder="Rol del usuario"
                    ref={emailRef}
                    className="hidden text-[20px] font-[400] tracking-[-0.4px] rounded-[30px] bg-[#D9D9D9] flex w-[365px] h-[50px] px-[40px] py-[12px] items-center"
                  />
                  <Sectores
                    selectedSector={selectedSector}
                    onSelectedSectorChange={handleSelectedSectorChange}
                  />
                </div>
                <div className="flex flex-col items-center gap-8">
                  <article className="text-center">
                    <img
                      src="https://cdn.discordapp.com/attachments/1143714208404471908/1165447224805826601/Usuario.png?ex=6546e24f&is=65346d4f&hm=9d49d67482396f4d8b724cfc900d52b7a47382794abf63292d137ebafb7b0bc2&"
                      alt="User preview"
                    />
                    <h4 className="text-xl font-bold mt-2">
                      {usernameRef.current?.value}
                    </h4>
                    <span className="">{selectedSector.name}</span>
                  </article>
                  <Button
                    label={'GUARDAR'}
                    onClick={createNewUser}
                    active={hasValidUser()}
                    type={0}
                  />
                </div>
              </form>
            </>
          </Modal>
          <div className="flex justify-between mt-[2em] mx-[4.5em]">
            {hasLoadedUsers && (
              <Button
                onClick={openModal}
                active={hasLoadedUsers}
                type={0}
                label={'NUEVO USUARIO'}
                className="bg-[#2C9CBF] rounded-[15px] select-none py-[16px] w-[236px] text-white font-[600] text-[20px]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
