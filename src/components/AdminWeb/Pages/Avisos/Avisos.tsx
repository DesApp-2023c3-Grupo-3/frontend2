import Button from '../../components/Buttons/Button';
import Modal from '../../components/Modal';
import TableMain from './components/Table/TableMain';
import FormAdvertising from './components/Modal/FormAdvertising';
import { useModal } from '../../hooks/useModal';
import { Advertising } from '../../types/customTypes';
import React from 'react';
import { asAdvertisings } from '../../../../services/advertisings';

function Avisos() {
  //GET ADVERTISINGS
  const [advertisingsJSON, setAdvertisingsJSON] = React.useState<Advertising[]>(
    [],
  );

  React.useEffect(() => {
    asAdvertisings
      .getAll()
      .then((r) => {
        setAdvertisingsJSON(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  //Modal
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <section>
      <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px] ml-[48px] mt-[20px]">
        Avisos
      </h1>

      <div className="mt-[-70px] mr-[3%] ">
        <TableMain
          advertisingsJSON={advertisingsJSON}
          setAdvertisingJSON={setAdvertisingsJSON}
        />
        <div className="flex justify-end">
          <Button
            onClick={openModal}
            active={true}
            label={'NUEVO AVISO'}
            type={1}
            className="bg-[#2C9CBF] rounded-[15px] select-none py-[16px] w-[236px] text-white font-[600] text-[20px]"
          />
          <Modal //Para llamar al modal necesitar usar el hook useModal para el estado del modal
            isOpen={isOpen}
            closeModal={closeModal}
            component={
              <FormAdvertising //en el componente del modal hay que mandarle la funcion para cerrar el modal
                advertisingsJSON={advertisingsJSON}
                setAdvertisingsJSON={setAdvertisingsJSON}
                closeModal={closeModal}
                isCreate={true}
              />
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Avisos;
