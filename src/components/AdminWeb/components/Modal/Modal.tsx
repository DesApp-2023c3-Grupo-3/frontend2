import React from 'react';
import { ModalContent, Modal as ModalUI } from '@nextui-org/react';
import { Fragment } from 'react';
import { Button } from '@nextui-org/react';

//El modal se usa con el hook useModal
interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
  children: React.ReactElement;
  label?: string;
}

function Modal({ isOpen, openModal, closeModal, children, label }: ModalProps) {
  return (
    <>
      {label ? (
        <Button
          className=""
          onClick={openModal}
          color="primary"
          size="lg"
          variant="shadow"
        >
          {label}
        </Button>
      ) : (
        ''
      )}
      <ModalUI
        backdrop="opaque"
        isOpen={isOpen}
        className="overflow-visible"
        onClose={closeModal}
        size="4xl"
        hideCloseButton
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
          base: 'bg-white dark:bg-zinc-700 rounded-[30px]',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="bg-[#484848] dark:bg-zinc-800 h-[67px] flex justify-end items-center rounded-t-[30px]">
                <button
                  className="mr-[15px] p-2 bg-gray-500/40 transition-all hover:bg-red-500 rounded-full"
                  onClick={onClose}
                >
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <path
                      className=""
                      d="M29.4931 26.673C29.8013 26.9812 29.9744 27.3992 29.9744 27.8351C29.9744 28.2709 29.8013 28.689 29.4931 28.9972C29.1849 29.3054 28.7668 29.4785 28.331 29.4785C27.8951 29.4785 27.4771 29.3054 27.1689 28.9972L18.4886 20.3142L9.80558 28.9944C9.49737 29.3027 9.07935 29.4758 8.64347 29.4758C8.2076 29.4758 7.78957 29.3027 7.48136 28.9944C7.17315 28.6862 7 28.2682 7 27.8323C7 27.3965 7.17315 26.9784 7.48136 26.6702L16.1644 17.99L7.4841 9.30695C7.17589 8.99874 7.00273 8.58071 7.00273 8.14484C7.00273 7.70896 7.17589 7.29094 7.4841 6.98273C7.79231 6.67452 8.21033 6.50137 8.6462 6.50137C9.08208 6.50137 9.5001 6.67452 9.80831 6.98273L18.4886 15.6657L27.1716 6.98136C27.4798 6.67315 27.8978 6.5 28.3337 6.5C28.7696 6.5 29.1876 6.67315 29.4958 6.98136C29.804 7.28957 29.9772 7.70759 29.9772 8.14347C29.9772 8.57935 29.804 8.99737 29.4958 9.30558L20.8128 17.99L29.4931 26.673Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <div>{children}</div>
            </>
          )}
        </ModalContent>
      </ModalUI>
    </>
  );
}

export default Modal;
