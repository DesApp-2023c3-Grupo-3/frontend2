type ButtonProps = {
  onClick: () => void;
  active: boolean;
  type: number;
  label: string;
};

function Button({ onClick, active, type, label }: ButtonProps) {
  const blueType = active
    ? 'bg-[#2C9CBF] text-white rounded-[30px] py-[16px] w-[300px] h-[40px] font-[600] text-[20px] hover:bg-[#2c9dbfc5]'
    : 'border-solid border-2 border-blue-300 bg-[#ffffff] text-[#2C9CBF] rounded-[30px] py-[16px] w-[300px] h-[40px] font-[600] text-[20px] hover:text-blue-300 hover:border-blue-200 hover:bg-[#2c9dbfc5]';
  const greenType = active
    ? 'border-solid border-2 border-lime-400 bg-[#ffffff] text-[#74C91E] rounded-[30px] py-[16px] w-[300px] h-[40px] font-[600] text-[20px] hover:text-lime-300 hover:border-lime-200 hover:bg-lime-400'
    : 'bg-[#74C91E] text-white rounded-[30px] py-[16px] w-[300px] h-[40px] font-[600] text-[20px] hover:bg-[#8EEB2F]';

  const createType =
    'bg-[#2C9CBF] rounded-[15px] py-[16px] w-[300px] text-white font-[600] text-[20px] hover:bg-[#2c9dbfc5]';

  const deleteType =
    'bg-[white] text-[#ff4949] border-2 border-red-500 rounded-[30px] py-[16px] w-[300px] h-[40px] font-[600] text-[20px] hover:bg-[red]';

  const createMobile =
    'bg-[#2C9CBF] rounded-[20px] w-[100px] h-[40px] text-[#fff] uppercase text-[14px] font-[700] ';

  let style;

  switch (type) {
    case 0:
      style = createType;
      break;
    case 1:
      style = blueType;
      break;
    case 2:
      style = greenType;
      break;
    case 3:
      style = deleteType;
      break;
    case 4:
      style = createMobile;
  }

  return (
    <>
      <button
        onClick={onClick}
        className={` ${style} flex items-center justify-center hover:text-white`}
      >
        {label}
      </button>
    </>
  );
}

export default Button;
