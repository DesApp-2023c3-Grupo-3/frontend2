import Modal from '../../components/Modal';
import { useModal } from '../../hooks/useModal';
import ScreenConfig from './components/ScreenConfig/ScreenConfig';
import ScreenHeader from './components/ScreenHeader/ScreenHeader';
import ScreenMain from './components/ScreenMain/ScreenMain';

function Pantallas() {
  const { isOpen, closeModal, openModal } = useModal();

  return (
    <section className="flex flex-col w-full pl-12 pr-12 pt-[12px] overflow-auto scrollbar scrollbar-thumb-[#949494] scrollbar-track-[#cbcbcb]">
      <ScreenHeader openConfig={openModal} />
      <ScreenMain />
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        openModal={openModal}
        label="hola"
      >
        <ScreenConfig closeModal={closeModal} />
      </Modal>
    </section>
  );
}

export default Pantallas;
