import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Button from '../Buttons/Button';

//El modal se usa con el hook useModal
interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
  children: React.ReactElement;
  label?: string;
}

function Modal({ isOpen, closeModal, openModal, children, label }: ModalProps) {
  return (
    <>
      {label ? (
        <div className="absolute">
          <Button onClick={openModal} active={true} label={label} type={4} />{' '}
        </div>
      ) : (
        ''
      )}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <Dialog.Panel className="top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute w-[100%] h-[100%] bg-white z-50">
            <div className="h-[60px] flex justify-end items-center">
              <button onClick={closeModal}>
                <svg
                  className="mr-[20px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M11.6597 10.4665C11.8182 10.625 11.9072 10.84 11.9072 11.0641C11.9072 11.2883 11.8182 11.5033 11.6597 11.6618C11.5012 11.8203 11.2862 11.9093 11.062 11.9093C10.8378 11.9093 10.6229 11.8203 10.4644 11.6618L6.00021 7.19623L1.53467 11.6604C1.37616 11.8189 1.16118 11.9079 0.937011 11.9079C0.712846 11.9079 0.497863 11.8189 0.339354 11.6604C0.180846 11.5019 0.0917969 11.2869 0.0917969 11.0627C0.0917969 10.8385 0.180846 10.6236 0.339354 10.4651L4.8049 6.00092L0.34076 1.53537C0.182252 1.37686 0.0932032 1.16188 0.0932032 0.937714C0.0932032 0.713549 0.182252 0.498566 0.34076 0.340057C0.499269 0.181549 0.714252 0.0924999 0.938417 0.0924999C1.16258 0.0924999 1.37756 0.181549 1.53607 0.340057L6.00021 4.8056L10.4658 0.339354C10.6243 0.180846 10.8393 0.0917969 11.0634 0.0917969C11.2876 0.0917969 11.5026 0.180846 11.6611 0.339354C11.8196 0.497862 11.9086 0.712846 11.9086 0.93701C11.9086 1.16117 11.8196 1.37616 11.6611 1.53467L7.19553 6.00092L11.6597 10.4665Z"
                    fill="#484848"
                  />
                </svg>
              </button>
            </div>
            <div>{children}</div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;
