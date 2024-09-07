import CardMobileInfo from './CardMobileInfo';
import ListOfCardsLayout from './ListOfCardsLayout';

function ListOfUsersCards({
  dataJson,
  handleCardClick,
}: {
  dataJson: User[];
  handleCardClick: (user: User) => void;
}) {
  return (
    <ListOfCardsLayout>
      {dataJson.map((user) => {
        return (
          <CardMobileInfo key={user.id} onClick={() => handleCardClick(user)}>
            <CardMobileInfo.Picture text={user.role?.name[0] || ''} />
            <CardMobileInfo.Name>{user.name}</CardMobileInfo.Name>
            <CardMobileInfo.Text>DNI: {user.dni}</CardMobileInfo.Text>
            <CardMobileInfo.Text>{user.role?.name || ''}</CardMobileInfo.Text>
          </CardMobileInfo>
        );
      })}
    </ListOfCardsLayout>
  );
}

export default ListOfUsersCards;
