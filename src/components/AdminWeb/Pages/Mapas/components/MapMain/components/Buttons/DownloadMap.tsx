import { Button, Tooltip } from '@nextui-org/react';
import { mapApi } from '../../../../../../../../services/map';
import { useMaps } from '../../../../store/useMaps';
import { Toast } from '../../../../../Avisos/components/Form/FormAdvertising';

function DownloadMapButton({ isLoading }: { isLoading: boolean }) {
  const { selectedMap } = useMaps();

  const handleDownload = () => {
    if (selectedMap) {
      mapApi
        .downloadImageById(selectedMap?.id, selectedMap?.originalName)
        .then(() => {
          Toast.fire({
            icon: 'success',
            title: 'Se descargó correctamente',
            position: 'bottom-end',
          });
        });
    }
  };
  return (
    <Tooltip showArrow={true} content="Descargar" className="font-semibold">
      <Button
        className="h-[3rem] text-white text-xl font-semibold"
        color="success"
        radius="full"
        onClick={handleDownload}
        isDisabled={isLoading}
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
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </Button>
    </Tooltip>
  );
}

export default DownloadMapButton;
