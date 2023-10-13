import advertisingData from './components/Mocks/advertisingData.json';
import { useState } from 'react';
import Button from '../../components/Buttons/Button';
import Modal from '../../components/Modal';
import TableMain from './components/Table/TableMain';
import FormAdvertising from './components/Modal/FormAdvertising';

function Avisos() {
  const [advertisingsJSON, setAdvertisingsJSON] = useState(
    //Esto tendría que ser un JSON que viene del backend
    advertisingData,
  );

  //ESTO HAY QUE CAMBIARLO
  //El problema que tengo es que dentro del componente que está en el modal hay un boton para cerrar el modal "GUARDAR"
  //Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px] ml-[48px] mt-[20px]">
        Avisos
      </h1>
      <div className="mt-[-70px] mr-[3%] ">
        <TableMain advertisingsJSON={advertisingsJSON} />
        <div className="flex justify-end">
          <Button
            onClick={openModal}
            active={true}
            label={'NUEVO AVISO'}
            type={1}
            className="bg-[#2C9CBF] rounded-[15px] select-none py-[16px] w-[236px] text-white font-[600] text-[20px]"
          />
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
    </section>
  );
}

export default Avisos;
