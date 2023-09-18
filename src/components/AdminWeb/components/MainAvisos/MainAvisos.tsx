import CrearAviso from './CrearAviso';
import TablaAvisos from './TablaAvisos';
import { useState } from 'react';

function MainAvisos() {
  const [avisos, setAvisos] = useState([
    {
      id: 1,
      usuario: 'C',
      nombre: 'Becas de apuntes',
      sectores: 'S6',
      dias: 'Lu-Mi-Vi',
      programacion: '12:00-22:00',
      estado: 'Activo',
    },
    {
      id: 2,
      usuario: 'C',
      nombre: 'Becas de apuntes',
      sectores: 'S6',
      dias: 'Lu-Mi-Vi',
      programacion: '12:00-22:00',
      estado: 'Activo',
    },
  ]);

  const agregarAviso = () => {
    const nuevoAviso = {
      id: avisos.length + 1,
      usuario: 'C',
      nombre: 'Becas de apuntes',
      sectores: 'S6',
      dias: 'Lu-Mi-Vi',
      programacion: '12:00-22:00',
      estado: 'Activo',
    };

    setAvisos([...avisos, nuevoAviso]);
  };

  return (
    <>
      <div>
        <div>
          <h1 className="text-[64px] font-bold text-[#484848] tracking-[-1.28px] ml-[48px] mt-[80px]">
            Avisos
          </h1>
        </div>
        <div>
          <TablaAvisos avisos={avisos} />
          <CrearAviso onCrearAviso={agregarAviso} />
        </div>
      </div>
    </>
  );
}

export default MainAvisos;
