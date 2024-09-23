import { Card } from '../../../hooks/useCards';
import CardModal from './CardModal';

export default function ListOfCards({
  cards,
  onClick,
}: {
  cards: Card[];
  onClick: (id: number) => void;
}) {
  return (
    <div className="flex flex-col gap-2 px-4 md:flex-row">
      {cards.map((card, index) => (
        <CardModal key={index} onClick={onClick} card={card} />
      ))}
    </div>
  );
}
