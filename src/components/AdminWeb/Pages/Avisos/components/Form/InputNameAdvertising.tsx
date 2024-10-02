import { Input } from '@nextui-org/react';

interface inputNameProp {
  emptyFields: any;
  invalidName: () => boolean;
  advertisingName: string;
  setAdvertisingName: (e: any) => void;
}

export function InputName({
  emptyFields,
  invalidName,
  advertisingName,
  setAdvertisingName,
}: inputNameProp) {
  return (
    <Input
      label="Nombre"
      placeholder="Ingresa el nombre del aviso..."
      type="text"
      size="md"
      value={advertisingName}
      isInvalid={emptyFields.advertisingName && invalidName()}
      onChange={(e) => {
        setAdvertisingName(e.target.value);
      }}
    />
  );
}
