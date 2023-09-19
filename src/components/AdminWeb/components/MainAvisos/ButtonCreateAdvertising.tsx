type ButtonCreateadvertisingProps = {
  onCreateAdvertising: () => void;
};

function ButtonCreateAdvertising({
  onCreateAdvertising,
}: ButtonCreateadvertisingProps) {
  return (
    <>
      <button
        onClick={onCreateAdvertising}
        className="bg-[#2C9CBF] rounded-[15px] py-[16px] w-[236px] text-white font-[600] text-[20px]"
      >
        NUEVO AVISO
      </button>
    </>
  );
}

export default ButtonCreateAdvertising;
