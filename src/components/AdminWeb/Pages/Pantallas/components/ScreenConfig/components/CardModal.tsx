import { Card, CardHeader, Image } from '@nextui-org/react';
import PopoverInfo from './PopoverInfo';

interface CardProps {
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
  card: CardProps;
  onClick: (id: number) => void;
}) {
  const { id, title, description, image, isSelected } = card;

  return (
    <div className="relative">
      <PopoverInfo>{description}</PopoverInfo>
      <Card
        className={`border-2 pt-1 ${
          isSelected
            ? 'border-[#2C9CBF] dark:border-blue-500'
            : 'border-slate-200 dark:border-slate-100'
        }`}
        fullWidth
        isPressable
        isHoverable
        onPress={() => onClick(id)}
        shadow="sm"
      >
        <div className="md:block flex w-full">
          <CardHeader className="md:w-auto w-2/4 md:pt-2 flex flex-col justify-center md:justify-start text-left items-start">
            <p className="uppercase text-sm font-bold">Tipo {id}</p>
            <h4 className="font-bold text-xl">{title}</h4>
          </CardHeader>

          <Image
            alt="Card background"
            className="md:w-[270px] h-full object-cover border-slate-300"
            src={image}
            radius="sm"
          />
        </div>
      </Card>
    </div>
  );
}
