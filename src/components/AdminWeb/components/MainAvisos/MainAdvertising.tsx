import TableMain from './Table/TableMain';
import advertisingData from '../MainAvisos/Mocks/advertisingData.json';
import Modal from '../Modal';
import FormAdvertising from './Modal/FormAdvertising';
import ButtonCreateAdvertising from './ButtonCreateAdvertising';
import { useState } from 'react';

function MainAdvertising() {
  const [advertisingsJSON, setAdvertisingsJSON] = useState(
    //Esto tendría que ser un JSON que viene del backend
    advertisingData,
  );

  //Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
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
            <ButtonCreateAdvertising onClick={openModal} />
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              component={
                <FormAdvertising
                  advertisingsJSON={advertisingsJSON}
                  setAdvertisingsJSON={setAdvertisingsJSON}
                  onCloseClick={closeModal}
                />
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainAdvertising;
