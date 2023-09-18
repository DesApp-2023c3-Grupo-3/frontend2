type BotonCrearAvisoProps = {
  onCrearAviso: () => void;
};

function CrearAviso({ onCrearAviso }: BotonCrearAvisoProps) {
  return (
    <>
      <button
        onClick={onCrearAviso}
        className="bg-[#2C9CBF] rounded-[15px] py-[16px] w-[236px] text-white font-[600] text-[20px]"
      >
        NUEVO AVISO
      </button>
    </>
  );
}

export default CrearAviso;
