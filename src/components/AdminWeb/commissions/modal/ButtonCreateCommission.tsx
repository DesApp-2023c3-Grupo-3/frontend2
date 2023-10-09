type ButtonCreateCommissionProps = {
  onClick: () => void;
};

function ButtonCreateCommission({ onClick }: ButtonCreateCommissionProps) {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-[#2C9CBF] rounded-[15px] py-[16px] w-[236px] text-white font-[600] text-[20px]"
      >
        AGREGAR COMISIONES
      </button>
    </>
  );
}

export default ButtonCreateCommission;
