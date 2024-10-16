import { Button, Input, Image } from '@nextui-org/react';
import ErrorMessage from '../../../../../../components/ErrorMessage';
import { useState } from 'react';
import { useFormMap } from '../../../../store/useFormMap';
import { useMaps } from '../../../../store/useMaps';
import { mapApi } from '../../../../../../../../services/map';
import { Toast } from '../../../../../Avisos/components/Form/FormAdvertising';

function MapCreateForm({ onCloseModal }: { onCloseModal: () => void }) {
  const { name, setName, file, setFile } = useFormMap();
  const { maps, setMaps } = useMaps();

  const [emptyFields, setEmptyFields] = useState({
    name: false,
    image: false,
  });

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
    <div className="flex p-3 flex-col items-center justify-center gap-2">
      <h4 className="md:hidden text-3xl font-bold">Crear mapa</h4>
      <div className="md:w-auto w-full">
        <Input
          placeholder="Ingrese el nombre"
          label="Nombre"
          className="md:w-[25rem] w-full"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          isInvalid={emptyFields.name}
        />
        {ErrorMessage('Ingrese un nombre', emptyFields.name)}
      </div>
      <div className="rounded-[20px] flex justify-center items-center bg-[#D9D9D9] md:w-[700px] md:h-[328px] w-full h-[18rem] relative">
        <label className="rounded-t-[20px] rounded-[20px] flex flex-col items-center cursor-pointer justify-center">
          {file ? (
            <Image
              src={URL.createObjectURL(file)}
              className="md:max-h-[328px] md:max-w-[700px] max-w-full max-h-[18rem]"
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
        className="h-[3rem] md:w-[20rem] w-full text-white text-xl font-semibold"
        color="primary"
        onClick={createMap}
        isDisabled={Object.values(emptyFields).some((field) => field)}
      >
        Crear
      </Button>
    </div>
  );
}

export default MapCreateForm;
