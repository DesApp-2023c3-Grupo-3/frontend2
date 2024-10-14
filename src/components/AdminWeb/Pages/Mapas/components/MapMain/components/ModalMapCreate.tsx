import { Input, Image, Button } from '@nextui-org/react';
import Modal from '../../../../../components/Modal/Modal';
import { useFormMap } from '../../../store/useFormMap';
import { ModalMapProps } from '../../../types/ModalMap';
import { mapApi } from '../../../../../../../services/map';
import { useMaps } from '../../../store/useMaps';
import { Toast } from '../../../../Avisos/components/Form/FormAdvertising';
import { useState } from 'react';
import ErrorMessage from '../../../../../components/ErrorMessage';

function ModalMapCreate({ isOpen, closeModal, openModal }: ModalMapProps) {
  const { name, setName, file, setFile } = useFormMap();
  const { maps, setMaps } = useMaps();

  const [emptyFields, setEmptyFields] = useState({
    name: false,
    image: false,
  });

  const onCloseModal = () => {
    closeModal();
    setFile(undefined);
    setName('');
  };

  const createMap = () => {
    const thereIsAnError = !name || !file;

    setEmptyFields({
      name: !name,
      image: !file,
    });

    setTimeout(() => {
      setEmptyFields({
        name: false,
        image: false,
      });
    }, 3000);

    if (!thereIsAnError) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('name', name);
      formData.append('estaSeleccionado', String(false));

      mapApi.create(formData).then((res) => {
        setMaps([
          {
            ...res.data,
            estaSeleccionado: false,
          },
          ...maps,
        ]);
        Toast.fire({
          icon: 'success',
          title: 'Se creó correctamente',
          position: 'bottom-end',
        });
        onCloseModal();
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={onCloseModal}
      openModal={openModal}
      label=""
    >
      <div className="flex p-3 flex-col items-center gap-2">
        <Input
          placeholder="Ingrese el nombre"
          label="Nombre"
          className="w-[25rem]"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          isInvalid={emptyFields.name}
          errorMessage="Ingrese un nombre"
        />

        <div className="rounded-[20px] flex justify-center items-center bg-[#D9D9D9] w-[700px] h-[328px] relative">
          <label className="rounded-t-[20px] rounded-[20px] flex flex-col items-center cursor-pointer justify-center">
            {file ? (
              <Image
                src={URL.createObjectURL(file)}
                className="max-h-[328px] max-w-[700px]"
              />
            ) : (
              <div className="flex flex-col justify-center items-center">
                <svg
                  className="mt-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="45"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M34 12.5V40.5C34 41.0304 33.7893 41.5391 33.4142 41.9142C33.0391 42.2893 32.5304 42.5 32 42.5H4C3.46957 42.5 2.96086 42.2893 2.58579 41.9142C2.21071 41.5391 2 41.0304 2 40.5V4.5C2 3.96957 2.21071 3.46086 2.58579 3.08579C2.96086 2.71071 3.46957 2.5 4 2.5H24M34 12.5H24V2.5M34 12.5L24 2.5M18 19.5V33.5M11 26.5H25"
                    stroke="#545454"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {ErrorMessage('Ingrese una imagen', emptyFields.image)}
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
        <Button
          className="h-[3rem] w-[20rem] text-white text-xl font-semibold"
          color="primary"
          onClick={createMap}
          isDisabled={Object.values(emptyFields).some((field) => field)}
        >
          Guardar
        </Button>
      </div>
    </Modal>
  );
}

export default ModalMapCreate;
