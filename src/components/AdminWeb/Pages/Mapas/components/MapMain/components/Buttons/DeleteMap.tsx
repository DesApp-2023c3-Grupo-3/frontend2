import { Button } from '@nextui-org/react';
import { useMaps } from '../../../../store/useMaps';
import { mapApi } from '../../../../../../../../services/map';
import { Toast } from '../../../../../Avisos/components/Form/FormAdvertising';

function DeleteMapButton({
  isLoading,
  closeModal,
}: {
  isLoading: boolean;
  closeModal: () => void;
}) {
  const { selectedMap, setMaps, maps } = useMaps();

  const handleDelete = () => {
    if (selectedMap) {
      mapApi.delete(selectedMap.id).then(() => {
        closeModal();
        Toast.fire({
          icon: 'success',
          title: 'Se eliminó correctamente',
        });
        setMaps(maps.filter((map) => map.id !== selectedMap.id));
      });
    }
  };

  return (
    <Button
      fullWidth
      className="h-[3rem] text-white text-xl font-semibold"
      color="danger"
      radius="full"
      isDisabled={isLoading}
      onClick={handleDelete}
    >
      Eliminar
    </Button>
  );
}

export default DeleteMapButton;
