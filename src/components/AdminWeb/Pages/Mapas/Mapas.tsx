import { Helmet } from 'react-helmet';
import useMobile from '../Pantallas/hooks/useMobile';
import { useModal } from '../../hooks/useModal';
import ModalMobile from '../../components/Modal/ModalMobile';
import Modal from '../../components/Modal/Modal';
import MapHeader from './components/MapHeader/MapHeader';
import MapMain from './components/MapMain/MapMain';
import { useState } from 'react';
import { mapApi } from '../../../../services/map';
import { Button, Image, Input } from '@nextui-org/react';

function Mapas() {
  const { isOpen, closeModal, openModal } = useModal();
  const { isMobile } = useMobile();

  const [file, setFile] = useState<File>();
  const [name, setName] = useState('');

  const onCloseModal = () => {
    closeModal();
    setFile(undefined);
    setName('');
  };

  const createMap = () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('name', name);

      mapApi.create(formData).then((res) => console.log(res));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (!name) {
        setName(files[0].name);
      }
      setFile(files[0]);
    }
  };

  return (
    <>
      <Helmet>
        <title>Administrador de cartelera | Mapas</title>
      </Helmet>
      <section className="flex flex-col w-full pl-12 pr-12 pt-[12px] overflow-auto scrollbar scrollbar-thumb-[#949494] scrollbar-track-[#cbcbcb]">
        <MapHeader openModal={openModal} />
        <MapMain />
        {isMobile ? (
          <ModalMobile
            isOpen={isOpen}
            closeModal={onCloseModal}
            openModal={openModal}
            label=""
          >
            <div></div>
          </ModalMobile>
        ) : (
          <Modal
            isOpen={isOpen}
            closeModal={onCloseModal}
            openModal={openModal}
            label=""
          >
            <div className="flex p-3 flex-col items-center gap-2">
              <Input
                placeholder="Ingrese el nombre"
                label="Nombre"
                className="w-[25rem]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="rounded-[20px] flex justify-center items-center bg-[#D9D9D9] w-[700px] h-[328px] relative">
                <label className="rounded-t-[20px] rounded-[20px] flex flex-col items-center cursor-pointer justify-center">
                  {file ? (
                    <Image
                      src={URL.createObjectURL(file)}
                      className="max-h-[328px] max-w-[700px]"
                    />
                  ) : (
                    <svg
                      className="mt-100"
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="45"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M34 12.5V40.5C34 41.0304 33.7893 41.5391 33.4142 41.9142C33.0391 42.2893 32.5304 42.5 32 42.5H4C3.46957 42.5 2.96086 42.2893 2.58579 41.9142C2.21071 41.5391 2 41.0304 2 40.5V4.5C2 3.96957 2.21071 3.46086 2.58579 3.08579C2.96086 2.71071 3.46957 2.5 4 2.5H24M34 12.5H24V2.5M34 12.5L24 2.5M18 19.5V33.5M11 26.5H25"
                        stroke="#545454"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              <div className="w-full flex gap-4 px-6">
                <Button
                  fullWidth
                  className="h-[3rem] text-white text-xl font-semibold"
                  color="success"
                >
                  Descargar
                </Button>
                <Button
                  fullWidth
                  className="h-[3rem] text-white text-xl font-semibold"
                  color="primary"
                  onClick={createMap}
                >
                  Guardar
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </section>
    </>
  );
}

export default Mapas;
