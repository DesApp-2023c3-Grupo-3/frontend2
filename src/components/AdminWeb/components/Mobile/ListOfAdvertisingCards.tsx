import { createEndHour } from '../../utils/createEndHour';
import { createSchedule } from '../../utils/createSchedule';
import { createSectors } from '../../utils/createSectors';
import { createStarthour } from '../../utils/createStartHour';
import CardMobileInfo from './CardMobileInfo';

function ListOfAdvertisingCards({
  dataJson,
  handleCardClick,
}: {
  dataJson: any[];
  handleCardClick: ((data: any) => void) | undefined;
}) {
  return (
    <section className="mt-[2rem] p-8 flex flex-col gap-2">
      {dataJson.map((advertising) => {
        return (
          <CardMobileInfo
            key={advertising.id}
            onClick={() => handleCardClick && handleCardClick(advertising)}
          >
            <div className="flex gap-4 justify-between items-center w-full px-2">
              <CardMobileInfo.Picture rol={advertising.user.role.name} />
              <CardMobileInfo.Name>{advertising.name}</CardMobileInfo.Name>
              <CardMobileInfo.State state={advertising.status} />
            </div>
            <CardMobileInfo.Text>{`${createStarthour(
              advertising,
            )} - ${createEndHour(advertising)}`}</CardMobileInfo.Text>
            <CardMobileInfo.Text>
              {createSchedule(advertising)}
            </CardMobileInfo.Text>
            <CardMobileInfo.Text>
              {createSectors(advertising)}
            </CardMobileInfo.Text>
          </CardMobileInfo>
        );
      })}
    </section>
  );
}

export default ListOfAdvertisingCards;
