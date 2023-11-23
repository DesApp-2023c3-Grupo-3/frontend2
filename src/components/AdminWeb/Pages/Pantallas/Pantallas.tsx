import { Helmet } from 'react-helmet';
import Modal from '../../components/Modal/Modal';
import { useModal } from '../../hooks/useModal';
import ScreenConfig from './components/ScreenConfig/ScreenConfig';
import ScreenHeader from './components/ScreenHeader/ScreenHeader';
import ScreenMain from './components/ScreenMain/ScreenMain';
import useMobile from './hooks/useMobile';
import ModalMobile from '../../components/Modal/ModalMobile';

function Pantallas() {
  const { isOpen, closeModal, openModal } = useModal();
  const { isMobile } = useMobile();

  return (
    <>
      <Helmet>
        <title>Administrador de cartelera | Pantallas</title>
      </Helmet>
      <section className="flex flex-col w-full pl-12 pr-12 pt-[12px] overflow-auto scrollbar scrollbar-thumb-[#949494] scrollbar-track-[#cbcbcb]">
        <ScreenHeader openConfig={openModal} />
        <ScreenMain />
        {isMobile ? (
          <ModalMobile
            isOpen={isOpen}
            closeModal={closeModal}
            openModal={openModal}
            label=""
          >
            <ScreenConfig closeModal={closeModal} />
          </ModalMobile>
        ) : (
          <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            openModal={openModal}
            label=""
          >
            <ScreenConfig closeModal={closeModal} />
          </Modal>
        )}
      </section>
    </>
  );
}

export default Pantallas;
