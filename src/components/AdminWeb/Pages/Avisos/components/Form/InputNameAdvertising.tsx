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
  const isMobile = window.innerWidth <= 640;

  return (
    <div className="flex justify-center">
      <input
        id="advertisingName"
        type="text"
        placeholder="Nombre del aviso..."
        className={`bg-default-100 transition-all hover:bg-default-200 rounded-medium shadow-sm text-[17px] font-[400] tracking-[-0.4px] flex w-full h-[50px] px-[20px] items-center ${
          emptyFields.advertisingName && invalidName() ? 'invalid-field' : ''
        }
        ${isMobile ? 'w-[90vw]' : ''}
        `}
        value={advertisingName}
        onChange={(e) => {
          setAdvertisingName(e.target.value);
        }}
        defaultValue={advertisingName}
        autoComplete="off"
      ></input>
    </div>
  );
}
