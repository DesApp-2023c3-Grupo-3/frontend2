import typeScreenOne from '../../../../../assets/typeScreen1.png';
import typeScreenTwo from '../../../../../assets/typeScreen2.png';
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
  };

  return (
    <section
      className={`${
        isSelected
          ? 'border-8 border-[#9F9F9F]'
          : 'hover:border-8 hover:border-[#9F9F9F]'
      }  relative flex flex-col justify-center items-center bg-[#222222] w-48 h-48 rounded-3xl `}
    >
      <button
        onClick={() => selectScreen(id)}
        className="absolute h-full w-full z-50"
      ></button>
      <div className="flex flex-col justify-center items-center relative h-full w-full z-40 text-white">
        <span className="text-3xl">{screenTitle}</span>
        <span className="text-lg">{sectorTitle}</span>
      </div>
      <div className="absolute opacity-[10%] h-full w-full">
        <img
          src={imageScreen[typeScreen]}
          alt="pantalla"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default ScreenCard;
