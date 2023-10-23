import typeScreenOne from '../../../../../assets/typeScreen1.png';
import { useScreens } from '../store/useScreens';

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
  const selectScreen = useScreens((state) => state.selectScreen);

  const imageScreen: Record<number, string> = {
    1: typeScreenOne,
  };

  return (
    <section
      className={`${
        isSelected
          ? 'border-8 border-[#9F9F9F]'
          : 'hover:border-8 hover:border-[#9F9F9F]'
      }  relative flex flex-col text-center justify-center items-center bg-[#222222] w-48 h-48 rounded-3xl overflow-hidden text-white`}
    >
      <button
        onClick={() => selectScreen(id)}
        className="absolute h-full w-full z-10"
      ></button>
      <span className="text-3xl">{screenTitle}</span>
      <span className="text-lg">{sectorTitle}</span>
      <div className="absolute opacity-[15%] h-full w-full">
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
