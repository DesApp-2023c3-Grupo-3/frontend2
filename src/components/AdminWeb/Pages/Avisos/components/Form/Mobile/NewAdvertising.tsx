import ErrorMessage from '../../../../../components/ErrorMessage';
import Sectores, { Sector } from '../../../../../components/Sectores';
import { InputName } from '../InputNameAdvertising';
import TypeGroup from './TypeGroup';

interface NewAdvertisingProp {
  emptyFields: {
    advertisingName: boolean;
    selectedSector: boolean;
    selectedDays: boolean;
    date: boolean;
    hour: boolean;
    type: boolean;
  };
  invalidName: () => boolean;
  advertisingName: string;
  setAdvertisingName: (a: string) => void;
  selectedSector: Sector[];
  setSelectedSector: (a: Sector[]) => void;
  invalidSectors: () => boolean;
}

export function NewAdvertising({
  emptyFields,
  invalidName,
  advertisingName,
  setAdvertisingName,
  selectedSector,
  setSelectedSector,
  invalidSectors,
}: NewAdvertisingProp) {
  return (
    <>
      <div>
        <div className="ml-[20px] text-[24px] font-bold mt-[-50px]">
          <span>NUEVO AVISO</span>
        </div>
      </div>
      <div className="flex-col">
        <div className="flex justify-center my-5 mt-10">
          <InputName
            emptyFields={emptyFields}
            invalidName={invalidName}
            advertisingName={advertisingName}
            setAdvertisingName={setAdvertisingName}
          />
        </div>
        <div className="flex justify-center">
          <Sectores
            selectedSector={selectedSector}
            onSelectedSectorChange={setSelectedSector}
            campos={emptyFields}
          />
          <div>
            {ErrorMessage(
              '*Falta seleccionar los sectores.',
              emptyFields.selectedSector && invalidSectors(),
            )}
          </div>
        </div>
        <div>
          <TypeGroup />
        </div>
      </div>
    </>
  );
}
