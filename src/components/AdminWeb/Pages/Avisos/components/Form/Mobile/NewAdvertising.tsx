import ErrorMessage from '../../../../../components/ErrorMessage';
import Sectores, { Sector } from '../../../../../components/Sectores';
import { InputName } from '../InputNameAdvertising';
import { TypeGroup } from './TypeGroups';

interface NewAdvertisingProp {
  emptyFields: any;
  invalidName: () => boolean;
  advertisingName: string;
  setAdvertisingName: (a: string) => void;
  selectedSector: Sector[];
  setSelectedSector: (a: Sector[]) => void;
  invalidSectors: () => boolean;
  type: number;
  setType: (a: number) => void;
  invalidType: () => boolean;
}

export function NewAdvertising({
  emptyFields,
  invalidName,
  advertisingName,
  setAdvertisingName,
  selectedSector,
  setSelectedSector,
  invalidSectors,
  type,
  setType,
  invalidType,
}: NewAdvertisingProp) {
  return (
    <div className="">
      <div>
        <div className="ml-[20px] dark:text-white text-[24px] font-bold mt-[-50px]">
          <h1>NUEVO AVISO</h1>
        </div>
      </div>
      <div>
        <div className="px-4">
          <div className="py-6">
            <InputName
              emptyFields={emptyFields}
              invalidName={invalidName}
              advertisingName={advertisingName}
              setAdvertisingName={setAdvertisingName}
            />
            <div className="absolute">
              {ErrorMessage(
                'Falta completar el nombre del aviso.',
                invalidName() && emptyFields.advertisingName,
              )}
            </div>
          </div>
          <div>
            <Sectores
              selectedSector={selectedSector}
              onSelectedSectorChange={setSelectedSector}
              hasError={emptyFields.selectedSector && invalidSectors()}
              canChooseMany={true}
            />
            <div className="absolute">
              {ErrorMessage(
                'Falta seleccionar los sectores.',
                emptyFields.selectedSector && invalidSectors(),
              )}
            </div>
          </div>
        </div>
        <div className="">
          <TypeGroup type={type} setType={setType} />
          <div className="absolute">
            {ErrorMessage(
              'Falta completar el tipo del aviso',
              emptyFields.type && invalidType(),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
