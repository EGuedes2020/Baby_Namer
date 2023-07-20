import UserNamesPlaceholder from "../layout/UserNamesPlaceholder";
import UserNamesCards from "./UserNamesCards";

function UserNamesContent(props) {
  if (props.itemsUser.length === 0) {
    return <UserNamesPlaceholder />;
  }

  const passIdCard = (currentId) => {
    console.log('current Id: ' + currentId);
    props.passIdCardToApp(currentId);
  };

  let items = props.itemsUser.map((value) => (
    <UserNamesCards
      passItemUserId={passIdCard}
      key={value.name} //valor único e identificador -> pode ser qualquer coisa -> é só para o react, n para o programador, então n passa este valor nas props
      id={value.name} //para ter acesso ao valor de key, porque a key só aparece para o react e n para o programador
      name={value.name}
      gender={value.gender}
    />
  ));

  

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {items}
      </div>
    </div>
  );
}

export default UserNamesContent;
