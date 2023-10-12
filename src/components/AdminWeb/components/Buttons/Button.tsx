type ButtonProps = {
  onClick: () => void;
  active: boolean;
  type: number;
  label: string;
};

function Button({ onClick, active, type, label }: ButtonProps) {
  const blueType = active
    ? 'bg-[#2C9CBF] text-white'
    : 'border-solid border-2 border-[#2C9CBF]-500 bg-[#ffffff] text-[#2C9CBF]';
  const greenType = active
    ? 'border-solid border-2 border-[#74C91E]-500 bg-[#ffffff] text-[#74C91E]'
    : 'bg-[#74C91E] text-white';
  const style = type === 1 ? blueType : greenType;
  return (
    <>
      <button
        onClick={onClick}
        className={`${style} rounded-[30px] py-[16px] w-[300px] h-[40px] font-[600] text-[20px] flex items-center justify-center hover:bg-[#2c9dbfc5]`}
      >
        {label}
      </button>
    </>
  );
}

export default Button;
