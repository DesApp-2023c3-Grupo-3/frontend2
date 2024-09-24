import { Helmet } from 'react-helmet';
import { FormEvent, useEffect, useState } from 'react';
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
import { useIsMobile } from '../../hooks/useIsMobile';
import ListOfUsersCards from '../../components/Mobile/ListOfUsersCards';
import useSearchTerm from '../../hooks/useSearchTermAdvertising';
import { Input } from '@nextui-org/react';
import EyeIcon from './components/Icons/EyeIcon';
import TablaNextUI from '../../components/Table/TablaNextUI';

function Usuarios() {
  const [usersJSON, setUsersJSON] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingCreate, setLoadingCreate] = useState(false);

  const { isOpen, openModal, closeModal } = useModal();

  const onCloseModal = () => {
    closeModal();
    setUsername('');
    setDni('');
    setPassword('');
    setSelectedRole({
      id: -1,
      name: 'Rol del usuario',
    });
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dni, setDni] = useState('');

  const [editRow, setEditRow] = useState<User>();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>({
    id: -1,
    name: 'Rol del usuario',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { setSearchTerm } = useSearchTerm();

  const handleRowClick = (user: User) => {
    setEditRow(user);
    setUsername(user.name);
    setPassword(user.password);
    setDni(user.dni);
    setSelectedRole(user.role || selectedRole);
    setIsEditing(true);
    openModal();
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
      !invalidUsername &&
      !invalidPassword &&
      !invalidDNI &&
      selectedRole.id !== -1
    );
  };

  const invalidUsername = username.trim() === '';
  const invalidPassword = password.trim() === '';
  const invalidDNI = dni.trim() === '';

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
          name: username,
          dni: dni,
          password: password,
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
          name: username,
          dni: dni,
          password: password,
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
      role: {
        id: -1,
        name: 'Rol del usuario',
      },
    });
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
      const updatedUsers: { data: User[] } = await userApi.getAll();
      setUsersJSON(updatedUsers.data || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateUsersTable();

    return () => {
      setSearchTerm('');
    };
  }, []);

  const isMobile = useIsMobile();

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
          <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px] mt-[20px] dark:text-[white]">
            Usuarios
          </h1>
          {loading ? (
            <Loader />
          ) : (
            <div className=" mr-[3.1%]">
              <TablaNextUI
                datasJSON={usersJSON}
                columns={tableColumns}
                type={1}
                onRowClick={handleRowClick}
                placeholder="Buscar usuarios..."
                setDatasJSON={setUsersJSON}
              />
              <div className="flex justify-end">
                <Modal
                  isOpen={isOpen}
                  openModal={handleOpenModal}
                  closeModal={onCloseModal}
                  label={'NUEVO USUARIO'}
                >
                  <div className="p-5">
                    <form className="flex justify-evenly items-center">
                      <div className="flex flex-col gap-4 w-2/4">
                        <Input
                          type="text"
                          label="DNI"
                          placeholder="Ingrese el DNI"
                          value={dni}
                          radius="full"
                          onChange={(e) => setDni(e.target.value)}
                        />
                        <Roles
                          selectedRole={selectedRole}
                          onSelectedRoleChange={handleSelectedUserRoleChange}
                        />
                        <Input
                          label="Password"
                          placeholder="Ingrese la contraseña"
                          radius="full"
                          fullWidth
                          endContent={
                            <EyeIcon
                              isVisible={isPasswordVisible}
                              onClick={() =>
                                setIsPasswordVisible(!isPasswordVisible)
                              }
                            />
                          }
                          onChange={(e) => setPassword(e.target.value)}
                          type={isPasswordVisible ? 'text' : 'password'}
                        />
                        <Input
                          type="text"
                          label="Nombre"
                          placeholder="Ingrese su nombre"
                          onChange={(e) => setUsername(e.target.value)}
                          radius="full"
                          value={username}
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center gap-4 w-2/4">
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
                          <h4 className="text-xl dark:text-white font-bold mt-2">
                            {username || 'Nombre del usuario'}
                          </h4>
                          <span className="dark:text-white">
                            {selectedRole.name}
                          </span>
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
                  </div>
                </Modal>
              </div>
            </div>
          )}
        </div>
      ) : (
        <MobileBody
          ListOfData={
            <ListOfUsersCards
              dataJson={usersJSON}
              handleCardClick={handleRowClick}
            />
          }
          isOpen={isOpen}
          onCloseClick={closeModal}
          openModal={handleOpenModal}
          loading={loading}
          title="Usuarios"
        >
          <FormMobile
            setUserJSON={updateUsersTable}
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
