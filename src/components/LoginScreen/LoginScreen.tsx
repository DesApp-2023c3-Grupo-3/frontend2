import './LoginScreen.sass';
import unahurLogo from './assets/unahur.png';
import { FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginScreen({ setScreenId }: { setScreenId: any }) {
  const navigate = useNavigate();
  const [state, updateState] = useState({});
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const screenIdRef = useRef<HTMLInputElement>(null);
  // const [invalidNotice, setInvalidNotice] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO Validacion screen
    if (!isEmpty(screenIdRef) && !invalidScreenId()) {
      navigateToScreen();
      return;
    }

    // Validacion login
    if (invalidUsername()) {
      return;
    }
    if (invalidPassword()) {
      return;
    }

    // TODO Login para ingresar a AdminWeb
    navigate('/admin');
  };

  const invalidUsername = () => {
    return usernameRef.current?.value.trim() !== 'Administrador';
  };

  const invalidPassword = () => {
    return passwordRef.current?.value.trim() !== '123';
  };

  const invalidScreenId = () => {
    return isNaN(parseInt(screenIdRef.current?.value.trim() as string));
  };

  const isEmpty = (str: any) =>
    !str.current || str.current?.value.trim() === '';

  const navigateToScreen = () => {
    // Intento de conexion ID pantalla
    // TODO Vista de error
    setScreenId(screenIdRef.current?.value || 1);
    navigate('/screen');
  };

  return (
    <section className="flex flex-row login">
      <article className="hidden md:flex flex-col justify-center h-screen px-32">
        <img src={unahurLogo} alt="UNAHUR Logo" />
        <div className="flex flex-col text-left mt-16">
          <span className="font-bold text-3xl w-[20ch]">
            Sistema Universitario de Gestión de Carteleras
          </span>
          <div className="line mt-4 w-[34ch]" />
        </div>
      </article>
      <article className="flex flex-col justify-center items-center md:ml-auto bg-[#609E2F] w-[100%] md:w-fit h-screen md:px-36 text-white">
        <div className="flex flex-col text-center items-center md:hidden">
          <span className="opacity-[0.9] text-xl w-[20ch]">
            Sistema Universitario de Gestión de Carteleras
          </span>
          <div className="line thin mt-4 w-[21ch]" />
        </div>
        <h3 className="text-3xl font-bold tracking-wide mt-20">¡Bienvenido!</h3>
        <span className="text-sm mt-8 opacity-80">
          Inicia sesión con tus datos
        </span>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col mt-4 gap-4 w-max"
        >
          <input
            type="text"
            placeholder="Nombre de usuario"
            name="username"
            ref={usernameRef}
            onChange={() => updateState({})}
          />
          {!isEmpty(usernameRef) && invalidUsername() && (
            <span className="error text-sm text-center">
              El usuario no se ha encontrado
            </span>
          )}
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            ref={passwordRef}
            onChange={() => updateState({})}
          />
          {!isEmpty(passwordRef) && invalidPassword() && (
            <span className="error text-sm text-center">
              La contraseña es incorrecta
            </span>
          )}
          <span className="text-sm text-center mt-4 opacity-80">
            O ingrese el código de pantalla
          </span>
          <input
            type="number"
            placeholder="ID de pantalla"
            name="screen-id"
            ref={screenIdRef}
            onChange={() => updateState({})}
          />
          {!isEmpty(screenIdRef) && invalidScreenId() && (
            <span className="error text-sm text-center">
              El código de pantalla es invalido
            </span>
          )}
          <button type="submit" className="mt-4 font-bold">
            Ingresar
          </button>
        </form>
        <img
          src={unahurLogo}
          alt="UNAHUR Logo"
          className="brightness-0 invert-[1] mt-10 w-36 md:hidden"
        />
      </article>
    </section>
  );
}

export default LoginScreen;
