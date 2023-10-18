type ButtonProps = {
  onClick: () => void;
  active: boolean;
  type: number;
  label: string;
  className?: string;
};

function Button({ onClick, active, type, label, className = '' }: ButtonProps) {
  const blueType = active
    ? 'bg-[#2C9CBF] text-white rounded-[30px] py-[16px] w-[300px] h-[40px] font-[600] text-[20px] hover:bg-[#2c9dbfc5]'
    : 'border-solid border-2 border-blue-300 bg-[#ffffff] text-[#2C9CBF] rounded-[30px] py-[16px] w-[300px] h-[40px] font-[600] text-[20px] hover:text-blue-300 hover:border-blue-200';
  const greenType = active
    ? 'border-solid border-2 border-lime-400 bg-[#ffffff] text-[#74C91E] rounded-[30px] py-[16px] w-[300px] h-[40px] font-[600] text-[20px] hover:text-lime-300 hover:border-lime-200'
    : 'bg-[#74C91E] text-white rounded-[30px] py-[16px] w-[300px] h-[40px] font-[600] text-[20px] hover:bg-[#8EEB2F]';

  const createType =
    'bg-[#2C9CBF] rounded-[15px] py-[16px] w-[300px] text-white font-[600] text-[20px]';

  const style = type === 1 ? blueType : type === 2 ? greenType : createType;

  return (
    <>
      <button
        onClick={onClick}
        className={` ${style} ${
          (className === '' && type !== 0)
            ? `rounded-[30px] py-[16px] w-[300px] h-[40px] font-[600] text-[20px] flex items-center justify-center hover:bg-[#2c9dbfc5]`
            : className
        }`}
      >
        {label}
      </button>
    </>
  );
}

export default Button;
