import ButtonCreateAdvertising from './ButtonCreateAdvertising';
import TableAdvertising from './TableAdvertising';
import { useState } from 'react';
import { advertisingData } from './Mocks/advertisingData';

function MainAdvertising() {
  const [advertisings, setAdvertisings] = useState(
    //Esto tendría que ser un JSON

    advertisingData,
  );

  const newAdvertising = () => {
    //Prueba de ejemplo
    const newAdvertising = {
      id: advertisings.length + 1,
      name: 'Foto de Edificio Malvinas',
      advertisingType: {
        id: advertisings.length + 1,
        name: 'Foto de Edificio Malvinas',
      },
      user: {
        id: advertisings.length + 1,
        name: 'Juan Lopez',
        dni: '43567876',
        password: '1234',
        role: {
          id: advertisings.length + 1,
          name: 'Gestión Estudiantil',
        },
      },
      sector: {
        id: advertisings.length + 1,
        name: 'Edificio Malvinas',
        topic: 'Materias',
      },
      schedule: {
        id: advertisings.length + 1,
        startDate: '2010',
        endDate: '2002',
        startHour: '9:00',
        endHour: '16:00',
        scheduleDays: 'Lu-Mi-Vi',
      },
    };

    setAdvertisings([...advertisings, newAdvertising]);
  };

  return (
    <>
      <div className="">
        <h1 className="text-[64px] font-bold text-[#484848] tracking-[-1.28px] ml-[48px] mt-[70px]">
          Avisos
        </h1>
        <TableAdvertising advertisingsJSON={advertisings} />
        <div className="flex justify-end">
          <ButtonCreateAdvertising onCreateAdvertising={newAdvertising} />{' '}
          {/** Este boton tendría que hacer el modal de createAdvertising **/}
        </div>
      </div>
    </>
  );
}

export default MainAdvertising;
