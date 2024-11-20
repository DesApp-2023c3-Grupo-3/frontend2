import typeScreenOne from '../../../../../assets/typeScreen1.png';
import typeScreenTwo from '../../../../../assets/typeScreen2.png';
import typeScreenThree from '../../../../../assets/typeScreen3.png';

import { useScreenFilters } from '../../../store/useScreenFilters';

interface ScreenCardProps {
  id: number;
  screenTitle: string;
  sectorTitle: string;
  typeScreen: number;
  isSelected: boolean;
}

function ScreenCard({
  id,
  screenTitle,
  sectorTitle,
  typeScreen,
  isSelected,
}: ScreenCardProps) {
  const selectScreen = useScreenFilters((state) => state.selectScreen);

  const imageScreen: Record<number, string> = {
    1: typeScreenOne,
    2: typeScreenTwo,
    3: typeScreenThree,
  };

  return (
    <button
      onClick={() => selectScreen(id)}
      className={`${
        isSelected
          ? 'border-8 border-[#2C9CBF]'
          : 'hover:border-8 hover:border-[#9F9F9F]'
      }  relative flex flex-col justify-center items-center bg-[#222222] w-48 h-48 rounded-3xl `}
    >
      <div className="flex flex-col justify-center items-center h-full w-full text-white">
        <span className="text-3xl">{screenTitle}</span>
        <span className="text-lg">{sectorTitle}</span>
      </div>
      <div className="absolute opacity-[10%] h-full w-full">
        <img
          src={imageScreen[typeScreen]}
          alt="pantalla"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </button>
  );
}

export default ScreenCard;
