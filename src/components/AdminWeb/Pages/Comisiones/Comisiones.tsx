import TableMain from './components/Table/TableMain';
import { useState } from 'react';
import commissionData from '../../Mocks/commissionData.json';
import { Commission } from '../../types/customTypes';
import ModalCreateCommission from './components/Modal/ModalCreateCommission';

function Comisiones() {
  const [commissionsJSON, setCommissionsJSON] = useState(
    commissionData as Commission[],
  );

  return (
    <div className="flex flex-col w-100 pl-12">
      <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px] mt-[20px]">
        Comisiones
      </h1>
      <div className="mt-[-70px] mr-[4.8%]">
        {/*<TableMain commisionsJSON={commissionsJSON} />*/}
        <TableMain commissionsJSON={commissionsJSON} />
        <div className="flex justify-end">
          {/** Boton para abrir el modal **/}
          <ModalCreateCommission
            commissionsJSON={commissionsJSON}
            setCommissionsJSON={setCommissionsJSON}
          />
        </div>
      </div>
    </div>
  );
}

export default Comisiones;
