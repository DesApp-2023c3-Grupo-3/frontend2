import CardModal from './components/CardModal';
import typeScreenOne from '../../../../assets/typeScreen1.png';
import typeScreenTwo from '../../../../assets/typeScreen2.png';
import typeScreenThree from '../../../../assets/typeScreen3.png';
import { useState, useEffect } from 'react';
import QuantityInput from './components/QuantityInput';
import ButtonDisabled from '../ButtonDisabled';

const initialCards = [
  {
    id: 1,
    title: 'Avisos y comisiones',
    description:
      'Avisos en forma de imagen y vídeo, con la tabla de las comisiones como foco principal',
    image: typeScreenOne,
    isSelected: false,
  },
  {
    id: 2,
    title: 'Avisos y vídeo',
    description:
      'Avisos en forma de imagen y vídeo, con los vídeos como foco principal',
    image: typeScreenTwo,
    isSelected: false,
  },
  {
    id: 3,
    title: 'Avisos y comisiones',
    description:
      'Avisos en forma de vídeo, los vídeos son lo único que se muestra',
    image: typeScreenThree,
    isSelected: false,
  },
];

function ScreenConfig() {
  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    return () => {
      const closeCards = cards.map((card) => {
        card.isSelected = false;
        return card;
      });
      setCards(closeCards);
    };
  }, []);

  const handleClick = (id: number) => {
    const newCards = cards.map((card) => {
      if (card.id === id) card.isSelected = !card.isSelected;
      else card.isSelected = false;
      return card;
    });
    setCards(newCards);
  };

  const isAnyCardSelected = cards.some((card) => card.isSelected);

  return (
    <section className="z-50 flex items-center justify-center flex-col px-10 py-5 gap-4">
      <div className="flex gap-10">
        {cards.map((card, index) => {
          return <CardModal key={index} onClick={handleClick} card={card} />;
        })}
      </div>
      {isAnyCardSelected && (
        <div className="flex gap-24">
          <QuantityInput title="Velocidad de los avisos" />
          <QuantityInput title="Velocidad de las comisiones" />
        </div>
      )}
      <ButtonDisabled
        action={() => {}}
        label="APLICAR"
        condition={isAnyCardSelected}
        styleActive="rounded-lg flex items-center justify-center"
        styleDesactive="rounded-lg flex items-center justify-center text-2xl w-[300px] border-solid border-2 bg-[#ffffff] h-[40px] font-[600] text-[20px] text-blue-300 border-blue-200"
      />
    </section>
  );
}

export default ScreenConfig;
