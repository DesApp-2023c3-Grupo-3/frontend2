import { useDisclosure } from '@nextui-org/react';

export function useModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return {
    isOpen,
    openModal: onOpen,
    closeModal: onClose,
  };
}
