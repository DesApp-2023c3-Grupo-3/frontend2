import { Image } from '@nextui-org/react';
import { useMaps } from '../../../store/useMaps';
import { Map } from '../../../types/Map';
import mapBg from '../assets/28954463_994925927327042_6838611342154773552_o.jpg';

function MapCard({
  id,
  originalName,
  name,
  onClick,
}: Map & { onClick: () => void }) {
  const { setSelectedMap } = useMaps();

  return (
    <button
      onClick={() => {
        setSelectedMap({
          id,
          originalName,
          name,
        });
        onClick();
      }}
      className={`hover:border-8 overflow-hidden transition-all hover:border-[#9F9F9F] relative flex flex-col justify-center bg-[#222222] items-center bg-gradient-to-b  w-48 h-48 rounded-3xl`}
    >
      <div className="p-2 flex flex-col justify-center items-center h-full w-full text-white">
        <span className="text-3xl">{name}</span>
        <span className="text-sm">{originalName.slice(0, 18)}...</span>
      </div>
      <div className="absolute opacity-[10%] h-full w-full">
        <Image
          src={mapBg}
          alt="pantalla"
          className="h-[12rem] w-[20rem] object-cover"
        />
      </div>
    </button>
  );
}

export default MapCard;
