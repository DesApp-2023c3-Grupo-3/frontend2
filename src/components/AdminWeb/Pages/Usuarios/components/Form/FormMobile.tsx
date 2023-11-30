import * as React from 'react';
import Button from '../../../../components/Buttons/Button';
import { previous } from '../../../Comisiones/components/Mobile/FormMobile';
import Loader from '../../../../components/Loader';
import Roles from '../../../../components/Roles';

interface FormMobileProps {
  setUserJSON: (e: any) => void;
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
  const roleRef = React.useRef<HTMLInputElement>(null);

  const [currentStep, setCurrentStep] = React.useState(1);
  const [loadingSave, setLoadingSave] = React.useState(false);
  const [_, updateState] = React.useState({});

  const [selectedRole, setSelectedRole] = React.useState<UserRole>({
    id: -1,
    name: 'Rol del usuario',
  });

  const handleSelectedUserRoleChange = (newSelectedRole: any) => {
    setSelectedRole(newSelectedRole);
  };

  const validateStep1 = () => {
    return true;
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep(2);
      }
    } else {
      setCurrentStep(1);
    }
  };

  return (
    <div className=" h-screen relative w-screen">
      <h2 className="flex justify-center items-center font-bold text-[24px]">
        USUARIO
      </h2>
      <form>
        {currentStep === 1 ? (
          <div className="h-[70%]">
            <h4 className="flex justify-center items-center font-semibold text-[16px]">
              Datos del Usuario
            </h4>
            <div className="flex flex-col gap-4 items-center translate-y-[25%]">
              <input
                type="text"
                placeholder="DNI"
                defaultValue={user?.dni}
                ref={dniRef}
                className="text-[20px] font-[400] tracking-[-0.4px] rounded-[30px] bg-[#D9D9D9] flex w-[90%] h-[50px] px-[40px] py-[12px] items-center"
              />
              <input
                type="password"
                placeholder="Contraseña"
                ref={passwordRef}
                className="text-[20px] font-[400] tracking-[-0.4px] rounded-[30px] bg-[#D9D9D9] flex w-[90%] h-[50px] px-[40px] py-[12px] items-center"
              />
              <input
                type="text"
                placeholder="Nombre"
                defaultValue={user?.name}
                ref={usernameRef}
                onChange={() => updateState({})}
                className="text-[20px] font-[400] tracking-[-0.4px] rounded-[30px] bg-[#D9D9D9] flex w-[90%] h-[50px] px-[40px] py-[12px] items-center"
              />
              <input
                type="text"
                placeholder="Rol del usuario"
                ref={roleRef}
                className="hidden text-[20px] font-[400] tracking-[-0.4px] rounded-[30px] bg-[#D9D9D9] flex w-[90%] h-[50px] px-[40px] py-[12px] items-center"
              />
            </div>
          </div>
        ) : (
          <div className="h-[100%] pb-[250px]">
            <h4 className="flex justify-center items-center font-semibold text-[16px]">
              Rol
            </h4>
            {
              <div className="flex justify-center flex-col items-center translate-y-[25%]">
                <Roles
                  selectedRole={selectedRole}
                  onSelectedRoleChange={handleSelectedUserRoleChange}
                />
                <article className="text-center mt-[30px]">
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
              </div>
            }
          </div>
        )}

        <div
          id="buttons"
          className="absolute m-auto bottom-[3%] right-0 left-0 translate-y-[-60px]"
        >
          {currentStep === 1 ? (
            <div className="flex justify-center">
              <Button
                onClick={handleNextStep}
                active={true}
                type={1}
                label="SIGUIENTE"
              ></Button>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <button
                className="bg-[#D9D9D9] rounded-full mr-3 h-[40px] w-[40px] flex justify-center items-center"
                onClick={handleNextStep}
              >
                {previous}
              </button>
              <div>
                <div className="mb-3"></div>
                <div>
                  {!loadingSave ? (
                    <Button
                      onClick={() => {}}
                      active={true}
                      type={1}
                      label={'GUARDAR'}
                    />
                  ) : (
                    <Loader />
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
