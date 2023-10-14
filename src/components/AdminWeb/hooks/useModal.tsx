import * as React from 'react';

export function useModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return {
    isOpen,
    openModal,
    closeModal,
  };
}
