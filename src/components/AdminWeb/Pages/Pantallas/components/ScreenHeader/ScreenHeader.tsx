import Button from '../Button/Button';
import SelectAllFilter from './components/SelectAllFilter';
import SelectSectorFilter from './components/SelectSectorFilter';

function ScreenHeader() {
  return (
    <header className="flex justify-between items-center w-full">
      <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px]">
        Pantallas
      </h1>
      <form className="flex justify-end gap-10 items-center w-full">
        <SelectAllFilter />
        <SelectSectorFilter />
        <Button
          onClick={() => {}}
          className="font-semibold text-xl text-white rounded-lg flex items-center justify-center w-[19%] bg-[#2C9CBF] py-2 px-7"
          label="CONFIGURAR"
        />
      </form>
    </header>
  );
}

export default ScreenHeader;
