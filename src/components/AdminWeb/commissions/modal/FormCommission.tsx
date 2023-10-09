import { Button } from '@mui/base';
import { useState } from 'react';

function FormCommission() {
  //sectores
  const [mostrarOpciones, setMostrarOpciones] = useState(false);
  const opciones = ['MA', 'S6', 'S8', 'OA'];
  const handleMostrarOpcionesClick = () => {
    setMostrarOpciones(!mostrarOpciones);
  };

  return (
    <form>
      <div className="flex w-full h-[90px] px-[20px] justify-between items-center">
        <Button
          onClick={handleMostrarOpcionesClick}
          className="text-[20px] font-[400] tracking-[-0.4px] rounded-[30px] bg-[#D9D9D9] flex w-[365px] h-[50px] px-[40px] py-[12px]"
        >
          Sector/es
        </Button>
        {mostrarOpciones && (
          <div className="shadow-md p-4 rounded-t-[2px] rounded-b-[10px] bg-[#ffffff] absolute w-[198px] h-[254px] ml-[150px]">
            {opciones.map((opcion) => (
              <label key={opcion}>
                <input type="checkbox" value={opcion} />
                {opcion}
              </label>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}

export default FormCommission;
