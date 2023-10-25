import CardModal from './components/CardModal';
import typeScreenOne from '../../../../assets/typeScreen1.png';
import typeScreenTwo from '../../../../assets/typeScreen2.png';
import typeScreenThree from '../../../../assets/typeScreen3.png';
import { useState } from 'react';
import QuantityInput from './components/QuantityInput';
import Button from '../../../../components/Buttons/Button';

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

  const handleClick = (id: number) => {
    const newCards = cards.map((card) => {
      if (card.id === id) card.isSelected = true;
      else card.isSelected = false;
      return card;
    });
    setCards(newCards);
  };

  return (
    <section className="z-50 flex items-center flex-col px-10 py-5 gap-4">
      <div className="flex gap-10">
        {cards.map((card, index) => {
          return <CardModal key={index} onClick={handleClick} card={card} />;
        })}
      </div>
      <div className="flex gap-24">
        <QuantityInput title="Velocidad de los avisos" />
        <QuantityInput title="Velocidad de las comisiones" />
      </div>
      <Button
        type={1}
        onClick={() => {}}
        label="APLICAR"
        active={true}
        className="rounded-lg flex items-center justify-center"
      />
    </section>
  );
}

export default ScreenConfig;
