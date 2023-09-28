import TableMain from './Table/TableMain';
import ModalCreateAdvertising from './Modal/ModalCreateAdvertising';
import advertisingData from '../MainAvisos/Mocks/advertisingData.json';
import { useState } from 'react';

function MainAdvertising() {
  const [advertisingsJSON, setAdvertisingsJSON] = useState(
    //Esto tendría que ser un JSON que viene del backend
    advertisingData,
  );

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
            <ModalCreateAdvertising
              advertisingsJSON={advertisingsJSON}
              setAdvertisingsJSON={setAdvertisingsJSON}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainAdvertising;
