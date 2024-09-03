import { Card } from '@nextui-org/react';

function CardMobileInfo({ children }: { children: React.ReactNode }) {
  return (
    <Card
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

CardMobileInfo.Picture = function Picture({ rol }: { rol: string }) {
  return (
    <div className="bg-[#2C9CBF] p-2 w-10 h-10 rounded-full flex items-center justify-center">
      <p className="text-white text-2xl">{rol[0]}</p>
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

type Status = 'active' | 'deprecated' | 'pending' | 'today';

CardMobileInfo.State = function State({ state }: { state: Status }) {
  return (
    <div
      className={`${statusClasses[state]} justify-self-end rounded-2xl w-[2rem] h-[0.8rem]`}
    />
  );
};

/*
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
*/

export default CardMobileInfo;
