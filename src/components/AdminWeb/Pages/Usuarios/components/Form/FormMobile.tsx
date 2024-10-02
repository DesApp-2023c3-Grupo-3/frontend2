import * as React from 'react';
import Button from '../../../../components/Buttons/Button';
import { previous } from '../../../Comisiones/components/Mobile/FormMobile';
import Loader from '../../../../components/Loader';
import Roles from '../../../../components/Roles';
import Swal from 'sweetalert2';
import { userApi } from '../../../../../../services/users';
import { Toast } from '../../../Avisos/components/Form/FormAdvertising';
import { Input } from '@nextui-org/react';
import EyeIcon from '../Icons/EyeIcon';

interface FormMobileProps {
  setUserJSON: () => void;
  closeModal: () => void;
  user?: User;
  isEditing: boolean;
}

export function FormMobile({
  setUserJSON,
  closeModal,
  user,
  isEditing,
}: FormMobileProps) {
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const dniRef = React.useRef<HTMLInputElement>(null);

  const [username, setUsername] = React.useState(user?.name || '');
  const [password, setPassword] = React.useState('');
  const [dni, setdni] = React.useState(user?.dni || '');

  const [currentStep, setCurrentStep] = React.useState(1);
  const [loadingSave, setLoadingSave] = React.useState(false);
  const [loadingDelete, setLoadingDelete] = React.useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const [selectedRole, setSelectedRole] = React.useState<UserRole>(
    user?.role || {
      id: -1,
      name: 'Rol del usuario',
    },
  );

  const handleSelectedUserRoleChange = (newSelectedRole: any) => {
    setSelectedRole(newSelectedRole);
  };

  const [emptyFields, setEmpyFields] = React.useState({
    dni: false,
    password: false,
    username: false,
    rol: false,
  });

  const validateField = (a: any) => {
    switch (a) {
      case 'dni':
        setdni(dniRef.current?.value + '');
        setEmpyFields({ ...emptyFields, dni: dniRef.current?.value === '' });
        return (emptyFields.dni = dniRef.current?.value === '');
      case 'password':
        setPassword(passwordRef.current?.value + '');
        setEmpyFields({
          ...emptyFields,
          password: passwordRef.current?.value === '',
        });
        return (emptyFields.password = passwordRef.current?.value === '');
      case 'username':
        setUsername(usernameRef.current?.value + '');
        setEmpyFields({
          ...emptyFields,
          username: usernameRef.current?.value === '',
        });
        return (emptyFields.username = usernameRef.current?.value === '');
      case 'rol':
        setEmpyFields({ ...emptyFields, rol: selectedRole.id === -1 });
        return (emptyFields.rol = selectedRole.id !== -1);
    }
  };

  const validateStep1 = (): boolean => {
    const updatedEmptyFields = {
      dni: dniRef.current?.value === '',
      password: passwordRef.current?.value === '',
      username: usernameRef.current?.value === '',
      rol: false,
    };
    setEmpyFields(updatedEmptyFields);
    return (
      usernameRef.current?.value !== '' &&
      (passwordRef.current?.value !== '' || isEditing) &&
      dniRef.current?.value !== ''
    );
  };

  const handleNextStep = (e: any) => {
    e.preventDefault();
    if (currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep(2);
      }
    } else {
      setCurrentStep(1);
    }
  };

  const createNewUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole.id === -1) {
      validateField('rol');
      return;
    }
    setLoadingSave(true);
    if (isEditing) {
      userApi
        .update({
          id: user?.id,
          name: username || '',
          dni: dni || '',
          password: password || '',
          role: selectedRole,
        })
        .then(() => {
          setUserJSON();
          closeModal();
        })
        .finally(() => setLoadingSave(false));
    } else {
      userApi
        .create({
          name: username || '',
          dni: dni || '',
          password: password || '',
          role: selectedRole,
        })
        .then(() => {
          setUserJSON();
          closeModal();
        })
        .finally(() => setLoadingSave(false));
    }
  };

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
    })
      .then((result) => {
        setLoadingDelete(true);
        if (result.isConfirmed && user) {
          userApi
            .delete(user)
            .then(() => {
              Toast.fire({
                icon: 'success',
                title: 'Se ha eliminado el usuario',
              });
              closeModal();
            })
            .then(() => setUserJSON())
            .catch((error) => console.error(error))
            .finally(() => setLoadingDelete(false));
        }
        if (result.isDenied || result.isDismissed) {
          setLoadingSave(false);
        }
      })
      .finally(() => setLoadingDelete(false));
  };

  React.useEffect(() => {
    validateField('rol');
  }, [selectedRole]);

  return (
    <div className="dark:text-white">
      <h2 className="flex justify-center items-center font-bold text-[24px]">
        USUARIO
      </h2>
      <form>
        {currentStep === 1 ? (
          <div className="flex flex-col gap-2 h-full w-full">
            <h4 className="text-center font-semibold text-[16px]">
              Datos del Usuario
            </h4>
            <div id="step1" className="flex flex-col gap-4 items-center px-2">
              <Input
                type="text"
                label="DNI"
                placeholder="Ingrese el DNI"
                defaultValue={user?.dni}
                ref={dniRef}
                value={dni}
                onChange={() => validateField('dni')}
                isInvalid={emptyFields.dni}
                errorMessage="Debe ingresar un DNI"
                radius="full"
                classNames={{
                  errorMessage: 'dark:text-red-300',
                }}
              />
              <Input
                label="Password"
                placeholder="Ingrese la contraseña"
                radius="full"
                fullWidth
                endContent={
                  <EyeIcon
                    isVisible={isPasswordVisible}
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  />
                }
                isInvalid={emptyFields.dni}
                errorMessage="Debe ingresar una contraseña"
                ref={passwordRef}
                type={isPasswordVisible ? 'text' : 'password'}
                onChange={() => validateField('password')}
                value={password}
                classNames={{
                  errorMessage: 'dark:text-red-300',
                }}
              />
              <Input
                type="text"
                label="Nombre"
                placeholder="Ingrese su nombre"
                defaultValue={user?.name}
                ref={usernameRef}
                value={username}
                isInvalid={emptyFields.username}
                errorMessage="Debe ingresar un nombre"
                onChange={() => {
                  validateField('username');
                }}
                radius="full"
                classNames={{
                  errorMessage: 'dark:text-red-300',
                }}
              />
            </div>
          </div>
        ) : (
          <div id="step2" className="">
            <h4 className="flex justify-center items-center font-semibold text-[16px]">
              Rol
            </h4>
            {
              <article className="text-center gap-2 mt-[20px] flex flex-col items-center p-2">
                <div>
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
                    {username ? username : user?.name}
                  </h4>
                  <span className="">{selectedRole.name}</span>
                </div>

                <Roles
                  selectedRole={selectedRole}
                  onSelectedRoleChange={handleSelectedUserRoleChange}
                  hasError={!!emptyFields.rol}
                />
              </article>
            }
          </div>
        )}

        <div id="buttons" className="absolute m-auto bottom-4 right-0 left-0">
          {currentStep === 1 ? (
            <div className="flex justify-center">
              {isEditing && (
                <div>
                  {!loadingDelete ? (
                    <button
                      onClick={handleDeleteUserClick}
                      className="bg-[red] w-[40px] h-[40px] rounded-full flex justify-center items-center mr-3"
                    >
                      {trash}
                    </button>
                  ) : (
                    <Loader type={1} color={'error'} className="mr-2" />
                  )}
                </div>
              )}
              <div className="flex justify-center">
                <Button
                  onClick={handleNextStep}
                  active={true}
                  type={1}
                  label="SIGUIENTE"
                ></Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <button
                className="bg-[#D9D9D9] dark:bg-white text-zinc-500  rounded-full h-[40px] w-[40px] flex justify-center items-center"
                onClick={handleNextStep}
              >
                {previous}
              </button>
              <div>
                <div>
                  {!loadingSave ? (
                    <Button
                      onClick={createNewUser}
                      active={!emptyFields.rol}
                      type={1}
                      label={'GUARDAR'}
                    />
                  ) : (
                    <Loader type={2} className="w-[70vw]" />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
const trash = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
  >
    <path
      fill="white"
      d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
    />
  </svg>
);
