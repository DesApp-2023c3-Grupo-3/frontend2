import Button from '../../../../components/Buttons/Button';
import SelectAllFilter from './components/SelectAllFilter';
import SelectSectorFilter from './components/SelectSectorFilter';
import React from 'react';

function ScreenHeader({ openConfig }: { openConfig: () => void }) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

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
        <Button
          onClick={openConfig}
          className="rounded-lg flex items-center justify-center text-2xl w-[19%]"
          label="CONFIGURAR"
          active={true}
          type={1}
        />
      </form>
    </header>
  );
}

export default ScreenHeader;
