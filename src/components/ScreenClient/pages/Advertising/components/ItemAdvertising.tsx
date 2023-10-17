import Dots from '../../../components/Dots';
import { DataAdvertising } from '../../../store/useAdvertisingMessages';

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
      <Card>{children}</Card>
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
