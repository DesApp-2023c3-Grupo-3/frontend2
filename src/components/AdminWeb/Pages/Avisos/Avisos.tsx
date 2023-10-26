import Button from '../../components/Buttons/Button';
import Modal from '../../components/Modal';
import TableMain from './components/Table/TableMain';
import FormAdvertising from './components/Modal/FormAdvertising';
import { useModal } from '../../hooks/useModal';
import { Advertising } from '../../types/customTypes';
import React from 'react';
import { advertisingsAPI } from '../../../../services/advertisings';
import { Helmet } from 'react-helmet';

function Avisos() {
  const [advertisingsJSON, setAdvertisingsJSON] = React.useState<Advertising[]>(
    [],
  );

  const { isOpen, openModal, closeModal } = useModal();

  const GetData = () => {
    advertisingsAPI
      .getAll()
      .then((r) => {
        setAdvertisingsJSON(r.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  React.useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Administrador de cartelera | Avisos</title>
      </Helmet>
      <section>
        <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px] ml-[48px] mt-[20px]">
          Avisos
        </h1>

        <div className="mt-[-70px] mr-[3%] ">
          <TableMain
            advertisingsJSON={advertisingsJSON}
            setAdvertisingsJSON={GetData}
          />
          <div className="flex justify-end">
            <Button
              onClick={openModal}
              active={true}
              label={'NUEVO AVISO'}
              type={0}
              className="bg-[#2C9CBF] rounded-[15px] select-none py-[16px] w-[236px] text-white font-[600] text-[20px]"
            />
            <Modal //Para llamar al modal necesitar usar el hook useModal para el estado del modal
              isOpen={isOpen}
              closeModal={closeModal}
              component={
                <FormAdvertising //en el componente del modal hay que mandarle la funcion para cerrar el modal
                  setAdvertisingsJSON={GetData}
                  closeModal={closeModal}
                  isCreate={true}
                />
              }
            />
          </div>
        </div>
      </section>
    </>
    
  );
}

export default Avisos;
