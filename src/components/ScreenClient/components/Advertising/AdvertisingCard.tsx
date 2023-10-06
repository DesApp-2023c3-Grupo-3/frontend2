import { useCarousel } from '../../hooks/useCarousel';
import Dots from '../Dots';
import unahur from '../../assets/unahur.png';

const TIME_CAROUSEL_ADVERTISING = 15;

function AdvertisingCard(props: any) {
  const { selectedIndex, selectedItem } = useCarousel(
    props.messages,
    TIME_CAROUSEL_ADVERTISING,
  );

  return (
    <article
      className={`${props.sx} bg-white w-full flex flex-col items-center justify-center relative h-[49.4vh]`}
    >
      {props.messages.length > 0 ? (
        <Card sx={`${props.sx}`}>
          <div className="h-[85%] w-[85%] rounded-[10%] overflow-hidden">
            <img
              className="w-full h-full"
              src={selectedItem.payload}
              alt={selectedItem.title}
            />
          </div>
          {props.messages.length > 1 && (
            <Dots
              selectedIndex={selectedIndex}
              items={props.messages}
              sx="absolute bottom-0"
            />
          )}
        </Card>
      ) : (
        <Card sx={`${props.sx}`}>
          <img src={unahur} alt="Logo de la UNAHUR" />
        </Card>
      )}
    </article>
  );
}

function Card(props: any) {
  return <>{props.children}</>;
}

export default AdvertisingCard;
