import { Button } from '@nextui-org/react';

function SelectMapButton({ isLoading }: { isLoading: boolean }) {
  const handleSelect = () => {};

  return (
    <Button
      fullWidth
      className="h-[3rem] text-white text-xl font-semibold"
      color="primary"
      radius="full"
      onClick={handleSelect}
      isDisabled={isLoading}
    >
      Seleccionar
    </Button>
  );
}

export default SelectMapButton;
