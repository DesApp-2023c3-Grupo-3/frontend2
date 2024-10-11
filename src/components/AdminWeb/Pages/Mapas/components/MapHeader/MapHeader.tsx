import { useModal } from '../../../../hooks/useModal';
import ModalMapCreate from '../MapMain/components/ModalMapCreate';
import CreateMapButton from './components/CreateMapButton';

function MapHeader() {
  const { isOpen, closeModal, openModal } = useModal();

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-[3rem] font-[700] text-[#484848] xl:text-[4rem] dark:text-[white]">
        Mapas
      </h1>
      <CreateMapButton onClick={openModal} />
      <ModalMapCreate
        closeModal={closeModal}
        openModal={openModal}
        isOpen={isOpen}
      />
    </div>
  );
}

export default MapHeader;
