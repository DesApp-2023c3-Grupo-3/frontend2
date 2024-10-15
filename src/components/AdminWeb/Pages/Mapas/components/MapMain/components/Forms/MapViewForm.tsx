import { Button, Input, Image } from '@nextui-org/react';
import DeleteMapButton from '../Buttons/DeleteMap';
import DownloadMapButton from '../Buttons/DownloadMap';
import EditMapButton from '../Buttons/EditMapButton';
import SelectMapButton from '../Buttons/SelectMap';
import SaveMapButton from '../Buttons/SaveMapButton';
import Loader from '../../../../../../components/Loader';
import { useMaps } from '../../../../store/useMaps';
import { useEffect, useState } from 'react';
import { useFormMap } from '../../../../store/useFormMap';
import { mapApi } from '../../../../../../../../services/map';

function MapViewForm({
  isOpen,
  onCloseModal,
}: {
  isOpen: boolean;
  onCloseModal: () => void;
}) {
  const { selectedMap } = useMaps();

  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState<File>();

  const [isEditing, setIsEditing] = useState(false);

  const { name, setName, file, setFile } = useFormMap();

  useEffect(() => {
    if (!isOpen) setIsEditing(false);
  }, [isOpen]);

  useEffect(() => {
    if (selectedMap) {
      setIsLoading(true);
      mapApi.getImageById(selectedMap?.id).then((res) => {
        const blob = new Blob([res.data], { type: 'image/png' });
        const newImage = new File([blob], selectedMap.originalName, {
          type: 'image/png',
        });
        setFile(newImage);
        setImage(newImage);
        setIsLoading(false);
        setName(selectedMap.name);
      });
    }
  }, [selectedMap]);

  const isValidChange =
    name !== selectedMap?.name || image?.name !== file?.name;

  return (
    <div className="flex p-3 flex-col items-center gap-2 dark:text-white">
      <div>
        <div className={`flex flex-col gap-1 text-center`}>
          {isEditing ? (
            <Input
              size="lg"
              placeholder="Escribe un nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <h3 className="text-3xl font-bold break-all">
              {selectedMap?.name}
            </h3>
          )}
          <h5 className=" break-all ">{selectedMap?.originalName}</h5>
        </div>
      </div>

      <div className="rounded-[20px] flex justify-center items-center bg-[#D9D9D9] md:w-[700px] w-full md:h-[328px] h-[20rem] relative">
        {!isLoading ? (
          isEditing ? (
            <>
              <div className="cursor-pointer">
                {image && (
                  <Image
                    src={URL.createObjectURL(image)}
                    className="md:max-h-[328px] md:max-w-[700px] w-full max-h-[20rem]"
                  />
                )}
              </div>
              <label className="text-slate-200 text-center cursor-pointer text-4xl font-bold flex items-center justify-center h-full w-full opacity-0 rounded-[20px] transition-all bg-black/80 absolute z-50 hover:opacity-100">
                Click para elegir un mapa
                <input
                  type="file"
                  accept="image/*"
                  className="hidden h-full w-full"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      setImage(files[0]);
                    }
                  }}
                />
              </label>
            </>
          ) : (
            file && (
              <Image
                src={URL.createObjectURL(file)}
                className="md:max-h-[328px] md:max-w-[700px] w-full max-h-[20rem]"
              />
            )
          )
        ) : (
          <Loader />
        )}
      </div>
      <div className="flex md:flex-row flex-col items-center gap-3 w-full md:px-10 justify-center">
        {isEditing ? (
          <>
            <SaveMapButton
              newMap={image}
              onClick={onCloseModal}
              isDisabled={isLoading || !isValidChange || !name}
            />
            <Button
              color="primary"
              className="h-[3rem] md:w-auto w-full font-semibold text-xl"
              radius="full"
              onClick={() => setIsEditing(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </Button>
          </>
        ) : (
          <>
            <SelectMapButton isLoading={isLoading} closeModal={onCloseModal} />
            <div className="flex gap-2">
              <EditMapButton
                isLoading={isLoading}
                onClick={() => setIsEditing(!isEditing)}
              />
              <DownloadMapButton isLoading={isLoading} />
              <DeleteMapButton
                isLoading={isLoading}
                closeModal={onCloseModal}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MapViewForm;
