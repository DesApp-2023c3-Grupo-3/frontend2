import CardMobileInfo from './CardMobileInfo';

function ListOfComissionCards({
  dataJson,
  handleCardClick,
}: {
  dataJson: any[];
  handleCardClick: (comision: any) => void;
}) {
  console.log(dataJson);
  return (
    <section className="mt-[2rem] p-8 flex flex-col gap-2">
      {dataJson.map((comision) => {
        return (
          <CardMobileInfo
            key={comision.id}
            onClick={() => handleCardClick && handleCardClick(comision)}
          >
            a
          </CardMobileInfo>
        );
      })}
    </section>
  );
}

export default ListOfComissionCards;
