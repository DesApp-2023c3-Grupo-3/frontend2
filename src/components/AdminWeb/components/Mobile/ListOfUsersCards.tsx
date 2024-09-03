import CardMobileInfo from './CardMobileInfo';

function ListOfUsersCards({
  dataJson,
  handleCardClick,
}: {
  dataJson: any[];
  handleCardClick: (user: any) => void;
}) {
  console.log(dataJson);
  return (
    <section className="mt-[2rem] p-8 flex flex-col gap-2">
      {dataJson.map((user) => {
        return (
          <CardMobileInfo key={user.id} onClick={() => handleCardClick(user)}>
            <CardMobileInfo.Picture text={user.role.name[0]} />
            <CardMobileInfo.Name>{user.name}</CardMobileInfo.Name>
            <CardMobileInfo.Text>DNI: {user.dni}</CardMobileInfo.Text>
            <CardMobileInfo.Text>{user.role.name}</CardMobileInfo.Text>
          </CardMobileInfo>
        );
      })}
    </section>
  );
}

export default ListOfUsersCards;
