import React from 'react';
import Button from '../Buttons/Button';
import { ModalContent, Modal as ModalUI } from '@nextui-org/react';

//El modal se usa con el hook useModal
interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
  children: React.ReactElement;
  label?: any;
}

function Modal({ isOpen, closeModal, openModal, children, label }: ModalProps) {
  return (
    <>
      {label && (
        <div className="fixed bottom-[5%] right-[10%]">
          <Button onClick={openModal} active={true} label={label} type={4} />
        </div>
      )}
      <ModalUI
        backdrop="opaque"
        isOpen={isOpen}
        onClose={closeModal}
        size="full"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
              },
            },
            exit: {
              y: -30,
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: 'easeIn',
              },
            },
          },
        }}
        classNames={{
          backdrop: 'bg-[#292f46]/70 backdrop-opacity-40',
          base: 'bg-white dark:bg-zinc-600 rounded-[30px]',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="h-[60px] flex justify-end items-center"></div>
              <div>{children}</div>
            </>
          )}
        </ModalContent>
      </ModalUI>
    </>
  );
}

export default Modal;
