import { Button } from '@nextui-org/react';
import { mapApi } from '../../../../../../../../services/map';
import { useMaps } from '../../../../store/useMaps';
import { useFormMap } from '../../../../store/useFormMap';
import { Toast } from '../../../../../Avisos/components/Form/FormAdvertising';

function SaveMapButton({
  isDisabled,
  onClick,
  newMap,
}: {
  newMap: File | undefined;
  onClick: () => void;
  isDisabled: boolean;
}) {
  const { selectedMap, setMaps } = useMaps();
  const { name } = useFormMap();

  const handleEdit = async () => {
    if (newMap && selectedMap) {
      const formData = new FormData();

      formData.append('file', newMap);
      formData.append('name', name);

      await mapApi.update(formData, selectedMap?.id);

      Toast.fire({
        icon: 'success',
        title: 'Se editó correctamente',
        position: 'bottom-end',
      });

      const response = await mapApi.getAll();

      setMaps(response.data);

      onClick();
    }
  };

  return (
    <Button
      radius="full"
      className="h-[3rem] md:w-[30rem] w-full font-semibold text-xl text-white"
      color="success"
      isDisabled={isDisabled}
      onClick={handleEdit}
    >
      Guardar
    </Button>
  );
}

export default SaveMapButton;
