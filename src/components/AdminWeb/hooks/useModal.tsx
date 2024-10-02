import { useDisclosure } from '@nextui-org/react';

export function useModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = () => {
    window.scrollTo(0, 0);
    onOpen();
  };

  return {
    isOpen,
    openModal,
    closeModal: onClose,
  };
}
