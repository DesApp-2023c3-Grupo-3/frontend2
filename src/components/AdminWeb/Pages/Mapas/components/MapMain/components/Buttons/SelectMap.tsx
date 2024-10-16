import { Button } from '@nextui-org/react';
import { mapApi } from '../../../../../../../../services/map';
import { useMaps } from '../../../../store/useMaps';
import { Toast } from '../../../../../Avisos/components/Form/FormAdvertising';

function SelectMapButton({
  isLoading,
  closeModal,
}: {
  isLoading: boolean;
  closeModal: () => void;
}) {
  const { selectedMap, maps, setMaps } = useMaps();

  const handleSelect = () => {
    if (selectedMap) {
      mapApi.update({ estaSeleccionado: true }, selectedMap?.id).then(() => {
        Toast.fire({
          icon: 'success',
          title: 'Se seleccionó correctamente',
          position: 'bottom-end',
        });
      });
      const newMaps = maps;
      newMaps.forEach((map) => {
        if (map.estaSeleccionado) map.estaSeleccionado = false;
        if (map.id === selectedMap.id) map.estaSeleccionado = true;
      });
      setMaps(newMaps);
      closeModal();
    }
  };

  return (
    <Button
      fullWidth
      className="h-[3rem] text-white text-xl font-semibold"
      color="primary"
      radius="full"
      onClick={handleSelect}
      isDisabled={isLoading || selectedMap?.estaSeleccionado}
    >
      Seleccionar
    </Button>
  );
}

export default SelectMapButton;
