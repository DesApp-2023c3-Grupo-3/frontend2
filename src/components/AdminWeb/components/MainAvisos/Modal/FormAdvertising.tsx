import DatePickerDays from './DatePickerDays';
import WeekdayPick from './WeekdatPick';
import Sectores from './Sectores';
import ImageTextVideo from './ImageTextVideo';

function FormAdvertising() {
  return (
    <form className="mx-10">
      <div className=" flex h-[90px] justify-between items-center">
        <input
          type="text"
          placeholder="Nombre del aviso..."
          className="text-[20px] font-[400] tracking-[-0.4px] rounded-[30px] bg-[#D9D9D9] flex w-[365px] h-[50px] px-[40px] py-[12px] items-center"
        ></input>
        <Sectores />
      </div>
      <div className="flex justify-between">
        <div>
          <DatePickerDays />
          <WeekdayPick />
        </div>
        <div className="mr-[2em]">
          <ImageTextVideo />
        </div>
      </div>
    </form>
  );
}

export default FormAdvertising;
