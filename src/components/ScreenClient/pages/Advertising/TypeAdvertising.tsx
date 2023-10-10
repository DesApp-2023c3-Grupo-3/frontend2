import { DataAdvertising } from '../../store/socketStore';
import AdvertisingImage from './ImageAdvertising';
import AdvertisingText from './TextAdvertising';

const ADVERTISING_TYPE_IMAGE = 1;

export default function AdvertisingType({ item }: { item: DataAdvertising }) {
  return (
    (item.advertisingTypeId === ADVERTISING_TYPE_IMAGE && (
      <AdvertisingImage payload={item.payload} />
    )) || <AdvertisingText payload={item.payload} />
  );
}
