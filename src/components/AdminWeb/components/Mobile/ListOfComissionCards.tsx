import dayjs from 'dayjs';
import CardMobileInfo from './CardMobileInfo';

function ListOfCommissionCards({
  dataJson,
  handleCardClick,
}: {
  dataJson: any[];
  handleCardClick: (comision: any) => void;
}) {
  console.log(dataJson);
  return (
    <section className="mt-[2rem] p-8 flex flex-col gap-2">
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
    </section>
  );
}

export default ListOfCommissionCards;
