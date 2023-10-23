import typeScreenOne from '../../../../../assets/typeScreen1.png';

interface ScreenCardProps {
  screenTitle: string;
  sectorTitle: string;
  typeScreen: number;
}

function ScreenCard({ screenTitle, sectorTitle, typeScreen }: ScreenCardProps) {
  const imageScreen: Record<number, string> = {
    1: typeScreenOne,
  };

  return (
    <section className="relative flex flex-col text-center justify-center items-center bg-[#222222] w-48 h-48 rounded-3xl overflow-hidden hover:border-8 hover:border-[#9F9F9F] cursor-pointer text-white">
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
