import './LoginScreen.sass';
import unahurLogo from './assets/unahur.png';
import { FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";

function LoginScreen({setScreenId}: {setScreenId: any}) {
  const navigate = useNavigate();
  const [newScreenId, setNewScreenId] = useState(1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    // TODO Validacion de datos
    // TODO Login para ingresar a AdminWeb
    //
    // Intento de conexion ID pantalla
    // TODO Vista de error
    setScreenId(newScreenId)
    navigate('/screen')
  }

  const onChangeScreenId = (e: React.FormEvent<HTMLInputElement>) => {
    setNewScreenId(parseInt(e.currentTarget.value))
  }

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
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col mt-4 gap-4 w-max">
          <input type="text" placeholder="Nombre de usuario" name="username" />
          <input type="password" placeholder="Contraseña" name="password" />
          <span className="text-sm text-center mt-4 opacity-80">
            O ingrese el código de pantalla
          </span>
          <input type="text" placeholder="ID de pantalla" name="screen-id"  onChange={(e) => onChangeScreenId(e)}/>
          <button type="submit" className="mt-4 font-bold">Ingresar</button>
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
