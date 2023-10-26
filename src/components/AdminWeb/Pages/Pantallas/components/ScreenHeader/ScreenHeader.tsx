import { useScreenFilters } from '../../store/useScreenFilters';
import ButtonDisabled from '../ButtonDisabled';
import SelectAllFilter from './components/SelectAllFilter';
import SelectSectorFilter from './components/SelectSectorFilter';
import React from 'react';

function ScreenHeader({ openConfig }: { openConfig: () => void }) {
  const screens = useScreenFilters((state) => state.screens);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const isAnyScreenSelected = screens.some((screen) => screen.isSelected);

  return (
    <header className="flex justify-between items-center w-full">
      <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px]">
        Pantallas
      </h1>
      <form
        className="flex justify-end gap-10 items-center w-full"
        onSubmit={handleSubmit}
      >
        <SelectAllFilter />
        <SelectSectorFilter />
        <ButtonDisabled
          label="CONFIGURAR"
          condition={isAnyScreenSelected}
          action={openConfig}
          styleActive="rounded-lg flex items-center justify-center text-2xl"
          styleDesactive="rounded-lg flex items-center justify-center text-2xl w-[300px] border-solid border-2 bg-[#ffffff] h-[40px] font-[600] text-[20px] text-blue-300 border-blue-200"
        />
      </form>
    </header>
  );
}

export default ScreenHeader;
