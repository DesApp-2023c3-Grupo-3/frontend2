import { useScreenFilters } from '../../store/useScreenFilters';
import ButtonDisabled from '../Button/ButtonDisabled';
import SelectAllFilter from './components/SelectAllFilter';
import SelectSectorFilter from './components/SelectSectorFilter';
import React from 'react';

function ScreenHeader({ openConfig }: { openConfig: () => void }) {
  const screens = useScreenFilters((state) => state.screens);
  const numbersOfScreens = screens.filter((screen) => screen.isSelected).length;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const isAnyScreenSelected = screens.some((screen) => screen.isSelected);

  return (
    <header className="flex flex-col justify-between items-center w-full xl:flex-row">
      <h1 className="text-[3rem] font-[700] text-[#484848] xl:text-[4rem] dark:text-[white]">
        Pantallas
      </h1>
      <form
        className="flex flex-col justify-end gap-3 mb-3 items-center w-full xl:mb-0 xl:flex-row xl:gap-10"
        onSubmit={handleSubmit}
      >
        <SelectAllFilter />
        <SelectSectorFilter />
        <div className="relative">
          {numbersOfScreens > 0 && (
            <div className="bg-white border-2 border-[#2C9CBF] text-[#2C9CBF] font-semibold rounded-full absolute w-7 h-7 right-[-0.6rem] top-[-0.6rem] flex justify-center items-center">
              {numbersOfScreens}
            </div>
          )}
          <ButtonDisabled
            label="CONFIGURAR"
            condition={isAnyScreenSelected}
            action={openConfig}
            styleActive="rounded-lg flex items-center justify-center text-2xl w-[300px] h-[40px] font-[600] text-[20px] text-white bg-[#2C9CBF] hover:bg-[#2c9dbfc5]"
            styleDesactive="rounded-lg flex items-center justify-center text-2xl w-[300px] border-solid border-2 bg-[#ffffff] h-[40px] font-[600] text-[20px] text-blue-300 border-blue-200"
          />
        </div>
      </form>
    </header>
  );
}

export default ScreenHeader;
