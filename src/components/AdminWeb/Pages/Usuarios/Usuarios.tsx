import { Helmet } from 'react-helmet';
import { FormEvent, useEffect, useRef, useState } from 'react';
import TableMain from './components/Table/TableMain';
import Button from '../../components/Buttons/Button';
import { userApi } from '../../../../services/users';
import { useModal } from '../../hooks/useModal';
import Roles from '../../components/Roles';
import dayjs from 'dayjs';
import Modal from '../../components/Modal/Modal';
import Loader from '../../components/Loader';

function Usuarios() {
  const [usersJSON, setUsersJSON] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingCreate, setLoadingCreate] = useState(false);

  const [_, updateState] = useState({});
  const { isOpen, openModal, closeModal } = useModal();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dniRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [selectedRole, setSelectedRole] = useState<UserRole>({
    id: -1,
    name: 'Rol del usuario',
  });

  const tableColumns = new Map<string, (user: any) => void>();
  tableColumns.set('DNI', (user: User) => user.dni);
  tableColumns.set('Nombre', (user: User) => user.name);
  tableColumns.set('Rol', (user: User) => user.role?.name);
  tableColumns.set('Creación', (user: User) => createdUserDate(user));

  const handleSelectedUserRoleChange = (newSelectedRole: any) => {
    setSelectedRole(newSelectedRole);
  };

  const hasValidUser = () => {
    return (
      !invalidUsername() &&
      !invalidPassword() &&
      !invalidDNI() &&
      selectedRole.id !== -1
    );
  };

  const invalidUsername = () => usernameRef.current?.value.trim() === '';
  const invalidPassword = () => passwordRef.current?.value.trim() === '';
  const invalidDNI = () => dniRef.current?.value.trim() === '';

  const createdUserDate = (user: User) =>
    dayjs(user.createdAt).format('D/MM/YY - hh:mm');

  const createNewUser = (e: FormEvent) => {
    setLoadingCreate(true);
    e.preventDefault();
    if (!hasValidUser()) return;

    userApi
      .create({
        name: usernameRef.current?.value + '',
        dni: dniRef.current?.value + '',
        password: passwordRef.current?.value + '',
        role: selectedRole,
      })
      .then(() => {
        updateUsersTable();
        closeModal();
        setLoadingCreate(false);
      });
  };

  const updateUsersTable = async () => {
    setLoading(true);
    try {
      const updatedUsers: any = await userApi.getAll();
      setUsersJSON((updatedUsers?.data as User[]) || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateUsersTable();
  }, []);

  return (
    <>
      <Helmet>
        <title>Administrador de cartelera | Usuarios</title>
      </Helmet>
      <div className="flex flex-col w-full pl-12">
        <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px] mt-[20px]">
          Usuarios
        </h1>
        {loading ? (
          <Loader />
        ) : (
          <div className="mt-[-70px] mr-[3.1%]">
            <TableMain rowArray={usersJSON} columns={tableColumns} />
            <div className="flex justify-end">
              <Modal
                isOpen={isOpen}
                openModal={openModal}
                closeModal={closeModal}
                label={'NUEVO USUARIO'}
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
                      <Roles
                        selectedRole={selectedRole}
                        onSelectedRoleChange={handleSelectedUserRoleChange}
                      />
                    </div>
                    <div className="flex flex-col items-center gap-8">
                      <article className="text-center">
                        <img
                          src="https://cdn.discordapp.com/attachments/1143714208404471908/1165447224805826601/Usuario.png?ex=6546e24f&is=65346d4f&hm=9d49d67482396f4d8b724cfc900d52b7a47382794abf63292d137ebafb7b0bc2&"
                          alt="User preview"
                          className="hidden"
                        />
                        <div className="bg-[#2C9CBF] aspect-square h-32 rounded-full relative">
                          <span className="text-white text-5xl text-center w-fit h-fit m-auto absolute inset-0 itim">
                            {selectedRole.name[0]}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold mt-2">
                          {usernameRef.current?.value}
                        </h4>
                        <span className="">{selectedRole.name}</span>
                      </article>
                      {loadingCreate ? (
                        <Loader />
                      ) : (
                        <Button
                          label={'GUARDAR'}
                          onClick={createNewUser}
                          active={hasValidUser()}
                          type={0}
                        />
                      )}
                    </div>
                  </form>
                </>
              </Modal>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Usuarios;
