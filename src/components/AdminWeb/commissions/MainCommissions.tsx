import './comisiones.sass'
import TableMain from './Table/TableMain';
//import Table from './Table/TableMain';
import { useState } from 'react';
import commissionData from '../mock/commisionData.json';
import { Commission } from '../types/customTypes';
import ModalCreateCommission from './modal/ModalCreateCommission';

function MainCommissions() {
  const [commissionsJSON, setCommissionsJSON] = useState(commissionData as Commission[]);

  const addNewCommission = () => {
    const newCommission = {
      id: commissionsJSON.length + 1,
      name: "C1",
      user: {
        id: commissionsJSON.length + 1,
        name: "Juan",
        dni: "1234",
        password: "contra",
        role: {
          id: commissionsJSON.length + 1,
          name: "Gestión Estudiantil",
        },
      },
      sector: {
        id: commissionsJSON.length + 1,
        name: "Origone A",
        topic: "Comision",
      },
      schedule: {
        id: commissionsJSON.length + 1,
        startDate: "2023",
        endDate: "2023",
        startHour: "14:00",
        endHour: "16:00",
        scheduleDays: "Lu-Mi-Vi",
      },
      subject: {
        id: commissionsJSON.length + 1,
        name: "Matematica 1",
      },
      classroom: {
        id: commissionsJSON.length + 1,
        name: "Lab 1",
      }
    } as Commission;

    setCommissionsJSON([...commissionsJSON, newCommission]);
  };
  
  return (
      <div className="flex flex-col w-100 pl-12">
        <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px] mt-[20px]">
          Comisiones
        </h1>
        <div className='mt-[-70px] mr-[4.8%]'>
          {/*<TableMain commisionsJSON={commissionsJSON} />*/}
          <TableMain commissionsJSON={commissionsJSON}/>
          <div className="flex justify-end">
            {/** Boton para insertar un excel con las nuevas comisiones **/}
            <ModalCreateCommission createCommission={addNewCommission} />
        </div>
        </div>
      </div>
  );
}

export default MainCommissions;
