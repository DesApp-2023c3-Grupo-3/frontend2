import ErrorMessage from '../../../../components/ErrorMessage';

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
    <div className="flex-col justify-center">
      <input
        id="advertisingName"
        type="text"
        placeholder="Nombre del aviso..."
        className={`text-[20px] font-[400] tracking-[-0.4px] rounded-[30px] bg-[#D9D9D9] flex w-[365px] h-[50px] px-[40px] py-[12px] items-center ${
          emptyFields.advertisingName && invalidName() ? 'invalid-field' : ''
        }`}
        value={advertisingName}
        onChange={(e) => {
          setAdvertisingName(e.target.value);
        }}
        defaultValue={advertisingName}
        autoComplete="off"
      ></input>
      {ErrorMessage(
        '*Falta completar el nombre del aviso.',
        invalidName() && emptyFields.advertisingName,
      )}
    </div>
  );
}
