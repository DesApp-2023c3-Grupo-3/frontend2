import { Card } from '@nextui-org/react';

export type Status = 'active' | 'deprecated' | 'pending' | 'today';

function CardMobileInfo({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Card
      onClick={onClick}
      isPressable
      className="bg-slate-100/50 p-2 w-full border-[1px] rounded-3xl flex flex-col justify-center items-center"
    >
      {children}
    </Card>
  );
}

CardMobileInfo.Name = function Name({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="text-xl font-semibold">{children}</p>;
};

CardMobileInfo.Picture = function Picture({ text }: { text: string }) {
  return (
    <div className="bg-[#2C9CBF] p-2 w-10 h-10 rounded-full flex items-center justify-center">
      <p className="text-white text-2xl">{text}</p>
    </div>
  );
};

CardMobileInfo.Text = function Text({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p>{children}</p>;
};

CardMobileInfo.Date = function Date({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p>{children}</p>;
};

const statusClasses = {
  active: 'bg-[#74C91E]',
  deprecated: 'bg-[#727272]',
  pending: 'bg-[#C2B222]',
  today: 'bg-[#C2B222]',
};

CardMobileInfo.State = function State({ state }: { state: Status }) {
  return (
    <div
      className={`${statusClasses[state]} justify-self-end rounded-2xl w-[2rem] h-[0.8rem]`}
    />
  );
};

export default CardMobileInfo;
