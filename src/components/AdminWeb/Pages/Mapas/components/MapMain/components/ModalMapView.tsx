import { Image, Button } from '@nextui-org/react';
import Modal from '../../../../../components/Modal/Modal';
import { ModalMapProps } from '../../../types/ModalMap';
import { useMaps } from '../../../store/useMaps';
import { useEffect, useState } from 'react';
import { mapApi } from '../../../../../../../services/map';
import Loader from '../../../../../components/Loader';
import DownloadMapButton from './Buttons/DownloadMap';
import DeleteMapButton from './Buttons/DeleteMap';
import SelectMapButton from './Buttons/SelectMap';

function ModalMapView({ isOpen, closeModal, openModal }: ModalMapProps) {
  const { selectedMap } = useMaps();
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState('');

  useEffect(() => {
    if (selectedMap) {
      setIsLoading(true);
      mapApi.getImageById(selectedMap?.id).then((res) => {
        const blob = new Blob([res.data], { type: 'image/png' });
        const imageUrl = URL.createObjectURL(blob);
        setImage(imageUrl);
        setIsLoading(false);
      });
    }
  }, [selectedMap]);

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      openModal={openModal}
      label=""
    >
      <div className="flex p-3 flex-col items-center gap-2">
        <div className="flex flex-col gap-1 text-center">
          <h3 className="text-3xl font-bold">{selectedMap?.name}</h3>
          <h5>{selectedMap?.originalName}</h5>
        </div>

        <div className="rounded-[20px] flex justify-center items-center bg-[#D9D9D9] w-[700px] h-[328px] relative">
          {!isLoading ? (
            <Image src={image} className="max-h-[328px] max-w-[700px]" />
          ) : (
            <Loader />
          )}
        </div>
        <div className="flex gap-3 w-full px-10">
          <DeleteMapButton isLoading={isLoading} closeModal={closeModal} />
          <SelectMapButton isLoading={isLoading} />
          <DownloadMapButton isLoading={isLoading} />
        </div>
      </div>
    </Modal>
  );
}

export default ModalMapView;
