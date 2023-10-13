type ButtonSaveProps = {
  onClick: () => void;
};

function ButtonSave({ onClick }: ButtonSaveProps) {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-[#2C9CBF] rounded-[30px] py-[16px] select-none w-[300px] h-[40px] text-white font-[600] text-[20px] flex items-center justify-center hover:bg-[#2c9dbfc5]"
      >
        GUARDAR
      </button>
    </>
  );
}

export default ButtonSave;
