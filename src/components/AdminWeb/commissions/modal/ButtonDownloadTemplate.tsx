type ButtonDownloadTemplateProps = {
  onClick: () => void;
  active: boolean;
};

function ButtonDownloadTemplate({ onClick, active }: ButtonDownloadTemplateProps) {

  const conditionalStyle = active 
    ? 'border-solid border-2 border-[#74C91E]-500 bg-[#ffffff] text-[#74C91E]' 
    : 'bg-[#74C91E] text-white';

  return (
    <>
      <button
        onClick={onClick}
        className={`${conditionalStyle} rounded-[30px] py-[16px] w-[300px] h-[40px] font-[600] text-[20px] flex items-center justify-center hover:bg[#97E746]`}
      >
        DESCARGAR TEMPLATE
      </button>
    </>
  );
}

export default ButtonDownloadTemplate;
