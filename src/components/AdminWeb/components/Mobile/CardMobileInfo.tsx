import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from '@nextui-org/react';

function CardMobileInfo({ children }: { children: React.ReactNode }) {
  return (
    <Card>
      <CardBody className="flex flex-col justify-center items-center">
        {children}
      </CardBody>
    </Card>
  );
}

CardMobileInfo.Name = function Name({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="text-pretty">{children}</p>;
};

CardMobileInfo.Picture = function Picture({ rol }: { rol: string }) {
  return <Image src={rol} />;
};

CardMobileInfo.Text = function Text({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="text-pretty">{children}</p>;
};

/* Logica */
CardMobileInfo.State = function State({ state }: { state: string }) {
  return <p className="text-pretty">{state}</p>;
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
