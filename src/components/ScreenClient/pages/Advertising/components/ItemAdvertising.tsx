import { DataAdvertising } from '../../../store/socketStore';
import Dots from '../../../components/Dots';
import unahur from '../../../assets/unahur.png';

export default function AdvertisingItem({
  children,
  messages,
  selectedIndex,
  sx,
}: {
  children: any;
  messages: DataAdvertising[];
  selectedIndex: number;
  sx: string;
}) {
  return (
    <article
      className={`${sx} bg-white w-full flex flex-col items-center justify-center relative h-[49.4vh]`}
    >
      {messages.length > 0 ? (
        <Card sx={`${sx}`}>{children}</Card>
      ) : (
        <Card sx={sx}>
          <img src={unahur} alt="Logo de la UNAHUR" />
        </Card>
      )}
      {messages.length > 1 && (
        <Dots
          selectedIndex={selectedIndex}
          items={messages}
          sx="absolute bottom-0"
        />
      )}
    </article>
  );
}

function Card(props: any) {
  return <>{props.children}</>;
}
