import React, { useState, useEffect } from "react";
import Cards from "./components/suggestions/Cards";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Loading from "./components/layout/Loading";
import SuggestionsHeader from "./components/suggestions/SuggestionsHeader";
import UserNamesHeader from "./components/userBabyNames/UserNamesHeader";
import UserNamesContent from "./components/userBabyNames/UserNamesContent";
import AddBabyModal from "./components/userBabyNames/AddBabyModal";

function App() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "eca3dd87b6mshe674af891d0593ap184773jsnb8025e5bfb6a",
      "X-RapidAPI-Host": "baby-names-by-api-ninjas.p.rapidapi.com",
    },
  };

  const [itemsUser, setItemsUser] = useState([]);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [gender, setGender] = useState("boy");
  const [popular, setPopular] = useState("true");

  const [url, setUrl] = useState(
    "https://baby-names-by-api-ninjas.p.rapidapi.com/v1/babynames?gender=" +
      gender +
      "&popular_only=" +
      popular
  );

  useEffect(() => {
    //se eu fizesse isto no fetch da api, a url seria sempre a url da anterior e não a atual, então fica assim dividido em duas userEffect
    // console.log("Effect gender: " + gender);
    // console.log("Effect popular: " + popular);
    setLoading("true"); //aparecer loading enquanto não recebemos os resultados do fetch
    setUrl(
      "https://baby-names-by-api-ninjas.p.rapidapi.com/v1/babynames?gender=" +
        gender +
        "&popular_only=" +
        popular
    );
  }, [gender, popular]); //sempre que os valores de género e/ou popular mudarem

  const filterChangedGenderHandler = (selectedGender) => {
    setGender(selectedGender);
    //NÃO ESTAVA A CONSEGUIR COM O PREV DE BAIXO ENTÃO USEI O USEREFFECT EM CIMA :)
    // setGender(prev => [...prev, selectedGender]);
    // console.log('teste gender: ' + gender);
    // setLoading('true'); //aparecer loading enquanto não recebemos os resultados do fetch
    // setUrl("https://baby-names-by-api-ninjas.p.rapidapi.com/v1/babynames?gender="+ selectedGender +"&popular_only=" + popular);
    // console.log('gender app.js test: ' + selectedGender + ' ' + gender );  //ver e usar o prev para prevenir este problema do gender... assim tbm escuso de usar o selected gender e uso o gender mesmo (o professor diz que ficaria mais clean e correcto)
  };

  const filterChangedPopularHandler = (selectedPopular) => {
    // console.log("teste popular");
    setPopular(selectedPopular);
  };

  const [count, setCount] = useState(0);

  const moreNames = (currentCount) => {
    // console.log('teste more names app.js');
    // console.log("App.js: " + currentCount);
    setCount(currentCount + 1);
    // console.log(currentCount);
  };

  const [addBaby, setAddBaby] = useState(false);

  const addBabyState = (addBabyState) => {
    setAddBaby(true);
  };

  const cancelAddBaby = (addBabyState) => {
    setAddBaby(false);
  };

  useEffect(() => {
    //para ver a info atualizada no console (e n ter de ver a info repetida para cada ação relacionada)
    console.log(itemsUser);
  }, [itemsUser]);

  const submitAddBaby = (enteredNameData) => {
    const nameData = {
      ...enteredNameData,
      id: enteredNameData.name, //tem de ser consistente com os outros id, caso contrário estes não dão eliminados(demorei a entender isso... vivendo e aprendendo xD)
    };

    var itemsUserAllIds = itemsUser.map((itemsUser) => itemsUser.id); //ver todos os ids já presentes no User baby names
    console.log(itemsUserAllIds);

    if (itemsUserAllIds.includes(nameData.id)) {
      //ser já houver um id igual ao que está a tentar ser adicionado
      // console.log('é igual, n podes adicionar este');
      alert("Já tem esse nome guardado. Adicione outro!");
    } else {
      setItemsUser((prevNameData) => {
        return [nameData, ...prevNameData];
      });
      setAddBaby(false);
    }
  };

  const sendToUserBabyNames = (selectedName) => {
    var itemsUserAllIds = itemsUser.map((itemsUser) => itemsUser.id); //ver todos os ids já presentes no User baby names
    console.log(itemsUserAllIds);

    console.log(selectedName.id);

    if (itemsUserAllIds.includes(selectedName.id)) {
      //ser já houver um id igual ao que está a tentar ser adicionado
      // console.log('é igual, n podes adicionar este');
      alert("Já tem esse nome guardado. Adicione outro!");
    } else {
      setItemsUser((prevSelectedName) => {
        return [selectedName, ...prevSelectedName];
      });
    }
  };

  const removeCardUserBabyNames = (currentId) => {
    // console.log("Current Id na App.js: " + currentId);
    const notRemovedUserBabyNames = itemsUser.filter(
      (itemsUser) => itemsUser.id !== currentId
    ); //apenas os items que n têm um id igual ao id do card selecionado é que vão ser mostrados
    setItemsUser(notRemovedUserBabyNames);
  };

  const clearAllItemsUser = () => {
    console.log("teste clear all btn");
    setItemsUser([]); //limpa tudo
    // console.log(itemsUser[1]);
  };

  const fightWinner = () => {
    // console.log("teste fight winner btn");
    // console.log(itemsUser.length);
    let min = 0; //se não, nunca escolhe o primeiro no itemsUser[0]
    let length = itemsUser.length;
    let max = Number(length) - 1; //dava erro às vezes porque se o length fosse 3 e eu fosse buscar itemsUser[3], não vai aparecer nada, porque o array começaria em 0 e acabaria em 2 (neste exemplo). ou seja, para buscar o ultimo objecto teria de ser itemsUser[2] :)

    if (length > 1) { 
      let random = Math.floor(Math.random() * (max - min + 1)) + min;
      setItemsUser([itemsUser[Number(random)]]);
      console.log("Length:" + length);
      console.log('Max:' + max);
      console.log('Min:' + min);
      console.log('Random:' + random);
    } else {
      alert('Tem que ter 2 ou mais nomes guardados para começar uma luta ;)');
    }
  };

  useEffect(() => {
    setLoading("true"); //aparecer loading enquanto não recebemos os resultados do fetch
    fetch(url, options)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log("Fetched URL: " + url);
        let cardsData = data.map((value, index) => {
          return {
            id: index,
            name: value,
            gender: gender,
          };
        });

        //console.log(cardsData);
        setItems(cardsData);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, count]); //sempre que o url ou o count mudam o useEffect é executado

  return (
    <div>
      <Header />
      <div className="container pt-4 mb-5 pb-5">
        <UserNamesHeader
          addBaby={addBaby}
          onClickAddBaby={addBabyState}
          clearAll={clearAllItemsUser}
          fightWinnerName={fightWinner}
        />
        {addBaby ? (
          <AddBabyModal
            addBaby={addBaby}
            onClickCancel={cancelAddBaby}
            onClickSubmit={submitAddBaby}
            onSaveNewName={submitAddBaby}
          />
        ) : (
          <p></p>
        )}

        <UserNamesContent
          itemsUser={itemsUser}
          passIdCardToApp={removeCardUserBabyNames}
        />

        <div className="mt-5"></div>

        <SuggestionsHeader
          onChangeFilterGender={filterChangedGenderHandler}
          onChangeFilterPopular={filterChangedPopularHandler}
          onClickAmount={moreNames}
          count={count}
        />
        {loading ? (
          <Loading />
        ) : (
          <Cards items={items} sendToApp={sendToUserBabyNames} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
