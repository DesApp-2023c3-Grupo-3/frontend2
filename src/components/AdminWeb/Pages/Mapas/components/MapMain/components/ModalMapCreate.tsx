import Modal from '../../../../../components/Modal/Modal';
import ModalMobile from '../../../../../components/Modal/ModalMobile';
import useMobile from '../../../../Pantallas/hooks/useMobile';
import { useFormMap } from '../../../store/useFormMap';
import { ModalMapProps } from '../../../types/ModalMap';
import MapCreateForm from './Forms/MapCreateForm';

function ModalMapCreate({ isOpen, closeModal, openModal }: ModalMapProps) {
  const { isMobile } = useMobile();
  const { setName, setFile } = useFormMap();

  const onCloseModal = () => {
    closeModal();
    setFile(undefined);
    setName('');
  };

  return isMobile ? (
    <ModalMobile
      isOpen={isOpen}
      closeModal={onCloseModal}
      openModal={openModal}
      label={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="z-[10]"
        >
          <path fill="white" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
        </svg>
      }
    >
      <MapCreateForm onCloseModal={onCloseModal} />
    </ModalMobile>
  ) : (
    <Modal
      isOpen={isOpen}
      closeModal={onCloseModal}
      openModal={openModal}
      label=""
    >
      <MapCreateForm onCloseModal={onCloseModal} />
    </Modal>
  );
}

export default ModalMapCreate;
