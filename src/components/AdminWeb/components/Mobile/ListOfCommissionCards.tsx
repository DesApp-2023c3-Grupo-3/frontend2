import dayjs from 'dayjs';
import CardMobileInfo from './CardMobileInfo';
import ListOfCardsLayout from './ListOfCardsLayout';
import { Commission } from '../../types/customTypes';

function ListOfCommissionCards({
  dataJson,
  handleCardClick,
}: {
  dataJson: Commission[];
  handleCardClick: (comision: Commission) => void;
}) {
  return (
    <ListOfCardsLayout>
      {dataJson.map((commission) => {
        return (
          <CardMobileInfo
            key={commission.id}
            onClick={() => handleCardClick && handleCardClick(commission)}
          >
            <CardMobileInfo.Picture text={commission.name} />
            <CardMobileInfo.Name>{commission.subject.name}</CardMobileInfo.Name>
            <CardMobileInfo.Text>
              Aula: {commission.classroom.name}
            </CardMobileInfo.Text>
            <CardMobileInfo.Text>{`${dayjs(
              commission.schedule.startHour,
            ).format('HH:mm')} - ${dayjs(commission.schedule.endHour).format(
              'HH:mm',
            )}`}</CardMobileInfo.Text>
          </CardMobileInfo>
        );
      })}
    </ListOfCardsLayout>
  );
}

export default ListOfCommissionCards;
