import CardItems from "./CardItems";

function Cards(props) {
  const sendToAppHandler = (selectedName) => {
    props.sendToApp(selectedName);
  };

  let items = props.items.map((value) => (
    <CardItems
      sendToCards={sendToAppHandler}
      key={value.name} //valor único e identificador -> pode ser qualquer coisa -> é só para o react, n para o programador, então n passa este valor nas props
      id={value.name} //para ter acesso ao valor de key, porque a key só aparece para o react e n para o programador
      name={value.name}
      gender={value.gender}
    />
  ));
  //console.log(items);

  return (
    <div className="container mt-4">
      <div className="row g-4">{items}</div>
    </div>
  );
}

export default Cards;
