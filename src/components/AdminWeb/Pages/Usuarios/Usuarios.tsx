import { Helmet } from 'react-helmet';
import { FormEvent, useEffect, useRef, useState } from 'react';
import TableMain from '../../components/Table/Table';
import Button from '../../components/Buttons/Button';
import { userApi } from '../../../../services/users';
import { useModal } from '../../hooks/useModal';
import Roles from '../../components/Roles';
import dayjs from 'dayjs';
import Modal from '../../components/Modal/Modal';
import Loader from '../../components/Loader';
import Swal from 'sweetalert2';
import { MobileBody } from '../../components/Mobile/MobileBody';
import { FormMobile } from './components/Form/FormMobile';
import { userDiv } from '../../utils/userDiv';

function Usuarios() {
  const [usersJSON, setUsersJSON] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingCreate, setLoadingCreate] = useState(false);

  const [_, updateState] = useState({});
  const { isOpen, openModal, closeModal } = useModal();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dniRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);
  const [editRow, setEditRow] = useState<User>();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>({
    id: -1,
    name: 'Rol del usuario',
  });

  const handleRowClick = (user: User) => {
    setEditRow(user);
    setSelectedRole(user.role as UserRole);
    setIsEditing(true);
    openModal();
    setTimeout(() => {
      updateState({});
    }, 60);
  };

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
    e.preventDefault();
    if (!hasValidUser()) return;

    setLoadingCreate(true);

    if (isEditing) {
      userApi
        .update({
          id: editRow?.id,
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
    } else {
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
    }
  };

  const handleOpenModal = () => {
    setIsEditing(false);
    setEditRow({
      name: '',
      dni: '',
      password: '',
      role: selectedRole,
    });
    updateState({});
    openModal();
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const handleDeleteUserClick = (e: any) => {
    e.preventDefault();
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No se podrá recuperar el usuario.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar.',
    }).then((result) => {
      setLoading(true);
      if (result.isConfirmed && editRow) {
        userApi
          .delete(editRow)
          .then(() => {
            Toast.fire({
              icon: 'success',
              title: 'Se ha eliminado el usuario',
            });
            closeModal();
            setLoading(false);
            setIsEditing(false);
          })
          .then(() => updateUsersTable())
          .catch((error) => console.error(error));
      }
      if (result.isDenied || result.isDismissed) {
        setLoading(false);
      }
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

  const isMobile = window.innerWidth <= 768;

  const tableColumnsMobile = new Map<string, (user: any) => void>();
  tableColumnsMobile.set('DNI', (user: User) => user.dni);
  tableColumnsMobile.set('Nombre', (user: User) => user.name);
  tableColumnsMobile.set('Rol', (user: User) =>
    user.role ? userDiv(user.role.name.charAt(0)) : '',
  );

  return (
    <>
      <Helmet>
        <title>Administrador de cartelera | Usuarios</title>
      </Helmet>
      {!isMobile ? (
        <div className="flex flex-col w-full pl-12">
          <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px] mt-[20px]">
            Usuarios
          </h1>
          {loading ? (
            <Loader />
          ) : (
            <div className="mt-[-70px] mr-[3.1%]">
              <TableMain
                dataJSON={usersJSON}
                columns={tableColumns}
                searchableColumns={['DNI', 'Nombre', 'Rol']}
                onRowClick={handleRowClick}
                placeholder="Buscar usuarios..."
              />
              <div className="flex justify-end">
                <Modal
                  isOpen={isOpen}
                  openModal={handleOpenModal}
                  closeModal={closeModal}
                  label={'NUEVO USUARIO'}
                >
                  <>
                    <h1 className="text-7xl font-bold px-12 mt-8 mb-4">
                      {!isEditing ? 'Crear' : 'Editar'} nuevo usuario
                    </h1>
                    <form className="grid grid-cols-2 px-12">
                      <div className="flex flex-col gap-4">
                        <input
                          type="text"
                          placeholder="DNI"
                          defaultValue={editRow?.dni}
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
                          defaultValue={editRow?.name}
                          ref={usernameRef}
                          onChange={() => updateState({})}
                          className="text-[20px] font-[400] tracking-[-0.4px] rounded-[30px] bg-[#D9D9D9] flex w-[365px] h-[50px] px-[40px] py-[12px] items-center"
                        />
                        <input
                          type="text"
                          placeholder="Rol del usuario"
                          ref={roleRef}
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
                          <div className="bg-[#2C9CBF] aspect-square h-32 rounded-full relative mx-auto">
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
                            type={1}
                          />
                        )}
                        {!isEditing ? null : loadingCreate ? (
                          <Loader />
                        ) : (
                          <Button
                            onClick={handleDeleteUserClick}
                            active={true}
                            type={3}
                            label="ELIMINAR"
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
      ) : (
        <MobileBody
          dataJson={usersJSON}
          tableColumns={tableColumnsMobile}
          handleRowClick={handleRowClick}
          isOpen={isOpen}
          onCloseClick={closeModal}
          openModal={handleOpenModal}
          loading={loading}
          title="Usuarios"
          placeholder="Buscar usuarios..."
        >
          <FormMobile
            setUserJSON={setUsersJSON}
            user={editRow}
            isEditing={isEditing}
            closeModal={closeModal}
          />
        </MobileBody>
      )}
    </>
  );
}

export default Usuarios;
