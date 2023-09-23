import Modal from '@mui/material/Modal';
import ButtonCreateAdvertising from '../ButtonCreateAdvertising';
import ButtonSave from '../ButtonSave';
import { useState } from 'react';
import FormAdvertising from './FormAdvertising';
import * as React from 'react';

type ModalCreateAdvertisingProps = {
  createAdvertising: () => void;
};

const ModalCreateAdvertising: React.FC<ModalCreateAdvertisingProps> = ({
  createAdvertising,
}) => {
  //modal
  const [open, setOpen] = useState(false);
  const handleOpenClose = () => setOpen(!open);

  return (
    <>
      <ButtonCreateAdvertising onClick={handleOpenClose} />
      <Modal open={open} onClose={handleOpenClose}>
        <div
          id="box"
          className="top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute max-w-[1000px] w-[100%] max-h-[600px] h-[100%] bg-white rounded-[30px]"
        >
          <div className="bg-[#484848] rounded-tr-[30px] rounded-tl-[30px] h-[67px] flex justify-end items-center">
            <button onClick={handleOpenClose}>
              <svg
                className="mr-[15px]"
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
          <FormAdvertising />
          <div className="flex justify-end m-5">
            <ButtonSave onClick={createAdvertising} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalCreateAdvertising;
