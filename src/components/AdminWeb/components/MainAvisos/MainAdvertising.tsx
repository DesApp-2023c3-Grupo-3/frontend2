import TableMain from './Table/TableMain';
import ModalCreateAdvertising from './Modal/ModalCreateAdvertising';
import advertisingData from '../MainAvisos/Mocks/advertisingData.json';
import { useState } from 'react';

function MainAdvertising() {
  const [advertisingsJSON, setAdvertisingsJSON] = useState(
    //Esto tendría que ser un JSON que viene del backend
    advertisingData,
  );
  //ejemplo
  const newAdvertising = () => {
    //Prueba de ejemplo
    const newAdvertising = {
      id: advertisingsJSON.length + 1,
      name: 'Foto de Edificio Malvinas',
      advertisingType: {
        id: advertisingsJSON.length + 1,
        name: 'Foto de Edificio Malvinas',
      },
      user: {
        id: advertisingsJSON.length + 1,
        name: 'Juan Lopez',
        dni: '43567876',
        password: '1234',
        role: {
          id: advertisingsJSON.length + 1,
          name: 'Gestión Estudiantil',
        },
      },
      sector: {
        id: advertisingsJSON.length + 1,
        name: 'Edificio Malvinas',
        topic: 'Materias',
      },
      schedule: {
        id: advertisingsJSON.length + 1,
        startDate: '2010',
        endDate: '2002',
        startHour: '9:00',
        endHour: '16:00',
        scheduleDays: 'Lu-Mi-Vi',
      },
    };

    setAdvertisingsJSON([...advertisingsJSON, newAdvertising]);
  };

  return (
    <>
      <div className="">
        <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px] ml-[48px] mt-[20px]">
          Avisos
        </h1>
        <div className="mt-[-70px] mr-[3%] ">
          <TableMain advertisingsJSON={advertisingsJSON} />
          <div className="flex justify-end">
            {/** Este boton tendría que hacer el modal de createAdvertising **/}
            <ModalCreateAdvertising createAdvertising={newAdvertising} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainAdvertising;
