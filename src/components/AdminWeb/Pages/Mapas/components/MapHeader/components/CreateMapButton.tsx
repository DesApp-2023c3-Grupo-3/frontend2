import { Button, ButtonProps } from '@nextui-org/react';

function CreateMapButton({ ...props }: ButtonProps) {
  return (
    <>
      <Button {...props} size="lg" className="md:flex hidden" color="primary">
        CREAR MAPA
      </Button>
    </>
  );
}

export default CreateMapButton;
