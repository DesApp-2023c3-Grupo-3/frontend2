type ButtonSaveProps = {
  onClick: () => void;
  active: boolean;
};

function ButtonSave({ onClick, active }: ButtonSaveProps) {

  const bordeado = 'border-solid border-2 border-[#2C9CBF]-500 bg-[#ffffff] text-[#2C9CBF]';
  const background = 'bg-[#2C9CBF] text-white'

  const condicional = active ? background : bordeado;

  return (
    <>
      <button
        onClick={onClick}
        className={`${condicional} rounded-[30px] py-[16px] w-[300px] h-[40px] font-[600] text-[20px] flex items-center justify-center hover:bg-[#2c9dbfc5]`}
      >
        GUARDAR
      </button>
    </>
  );
}

export default ButtonSave;
//hover:bg-[#2c9dbfc5]
