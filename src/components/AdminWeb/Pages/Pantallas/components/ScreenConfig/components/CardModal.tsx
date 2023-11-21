interface Card {
  title: string;
  description: string;
  image: string;
  id: number;
  isSelected: boolean;
}

export default function CardModal({
  card,
  onClick,
}: {
  card: Card;
  onClick: (id: number) => void;
}) {
  const { id, title, description, image, isSelected } = card;

  return (
    <section
      className={`border-4 overflow-hidden box-border relative rounded-3xl ${
        isSelected ? 'border-[#2C9CBF]' : 'border-slate-200'
      }`}
    >
      <button
        className="absolute w-full h-full z-40"
        onClick={() => onClick(id)}
      ></button>
      <div className="flex md:flex-col">
        <header className="relative flex flex-col justify-center items-center bg-[#222222] h-32 w-40 md:w-60 md:h-44">
          <div className="text-center flex flex-col justify-center items-center relative h-full w-full z-20 text-white">
            <span className="text-2xl md:text-3xl font-semibold">{title}</span>
          </div>
          <div className="absolute opacity-[15%] h-full w-full z-10">
            <img
              src={image}
              alt="pantalla"
              className="w-full h-full object-cover"
            />
          </div>
        </header>
        <main className="p-2 text-center text-sm md:text-xl flex place-items-center h-32 w-40 md:w-60 md:h-44 bg-white">
          {description}
        </main>
      </div>
    </section>
  );
}
