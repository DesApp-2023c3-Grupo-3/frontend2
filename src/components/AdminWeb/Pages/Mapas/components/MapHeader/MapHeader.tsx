import CreateMapButton from './components/CreateMapButton';

function MapHeader({ openModal }: { openModal: () => void }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-[3rem] font-[700] text-[#484848] xl:text-[4rem] dark:text-[white]">
        Mapas
      </h1>
      <CreateMapButton onClick={openModal} />
    </div>
  );
}

export default MapHeader;
