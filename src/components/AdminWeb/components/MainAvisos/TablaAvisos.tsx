import React from 'react';

type Aviso = {
  id: number;
  usuario: string;
  nombre: string;
  sectores: string;
  dias: string;
  programacion: string;
  estado: string;
};

type TablaAvisosProps = {
  avisos: Aviso[];
};

function TablaAvisos({ avisos }: TablaAvisosProps) {
  return (
    <>
      <div className="">
        <table className="table-auto border-collapse overflow-hidden rounded-tl-[20px] rounded-tr-[20px] m-10">
          <thead className="bg-[#484848] text-[#BABABA] text-[24px]">
            <tr>
              <th className="px-4 py-4"></th>
              <th className="px-4 py-4 w-[393px]">Nombre</th>
              <th className="px-4 py-4 w-[170px]">Sector/es</th>
              <th className="px-4 py-4 w-[267px]">Días</th>
              <th className="px-4 py-4 w-[267px]">Programación</th>
              <th className="px-4 py-4 w-[178px]">Estado</th>
            </tr>
          </thead>
          <tbody className="text-[20px]">
            {avisos.map((aviso, index) => (
              <tr
                key={aviso.id}
                className={index % 2 === 0 ? 'bg-[#F1F1F1]' : 'bg-[#DFDFDF]'}
              >
                <td className="px-4 py-2">
                  {' '}
                  <div className="flex justify-center items-center text-white text-[32px] font-[500] bg-[#2C9CBF] rounded-full w-[60px] h-[60px] text-center">
                    {aviso.usuario}
                  </div>
                </td>
                <td className="px-4 py-2">{aviso.nombre}</td>
                <td className="px-4 py-2">{aviso.sectores}</td>
                <td className="px-4 py-2">{aviso.dias}</td>
                <td className="px-4 py-2">{aviso.programacion}</td>
                <td className="px-4 py-2">{aviso.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TablaAvisos;
