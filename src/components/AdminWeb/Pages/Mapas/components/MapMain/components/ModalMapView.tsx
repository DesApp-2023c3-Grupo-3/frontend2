import Modal from '../../../../../components/Modal/Modal';
import { ModalMapProps } from '../../../types/ModalMap';
import { useFormMap } from '../../../store/useFormMap';
import MapViewForm from './Forms/MapViewForm';
import useMobile from '../../../../Pantallas/hooks/useMobile';
import ModalMobile from '../../../../../components/Modal/ModalMobile';

function ModalMapView({ isOpen, closeModal, openModal }: ModalMapProps) {
  const { setName, setFile } = useFormMap();
  const { isMobile } = useMobile();

  const onCloseModal = () => {
    setFile(undefined);
    setName('');
    closeModal();
  };

  return isMobile ? (
    <ModalMobile
      isOpen={isOpen}
      closeModal={onCloseModal}
      openModal={openModal}
    >
      <MapViewForm onCloseModal={onCloseModal} isOpen={isOpen} />
    </ModalMobile>
  ) : (
    <Modal
      isOpen={isOpen}
      closeModal={onCloseModal}
      openModal={openModal}
      label=""
    >
      <MapViewForm onCloseModal={onCloseModal} isOpen={isOpen} />
    </Modal>
  );
}

export default ModalMapView;
