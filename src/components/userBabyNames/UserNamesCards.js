import React, { useState } from "react";

function UserNamesCards(props) {
  let gender = "bi bi-gender-male"; // se não definir aqui, dps não dá
  
  //teve de ser objeto para não aparecer um warning (n posso fazer como no de cima let genderColor="nada")
  let genderColor = {
    color: "white",
    backgroundColor: "#e77a74",
    borderRadius: "5px",
    padding: "6px",
  }; // se não definir aqui, dps não dá

  const girlC = {
    color: "white",
    backgroundColor: "#e77a74",
    borderRadius: "5px",
    padding: "6px",
  };
  const boyC = {
    color: "white",
    backgroundColor: "#0d6efd",
    borderRadius: "5px",
    padding: "6px",
  };
  const neutralC = {
    color: "white",
    backgroundColor: "green",
    borderRadius: "5px",
    padding: "6px",
  };

  switch (props.gender) {
    case "boy":
      gender = "bi bi-gender-male";
      genderColor = boyC;
      break;

    case "girl":
      gender = "bi bi-gender-female";
      genderColor = girlC;
      break;

    case "neutral":
      gender = "bi bi-gender-ambiguous";
      genderColor = neutralC;
      break;

    default:
      console.log("erro no switch styles");
      break;
  }

  const [iconTrash, setIconTrash] = useState("bi bi-trash3 text-muted");

  const trashEnter = () => {
    // console.log('enter');
    setIconTrash('bi bi-trash3-fill text-danger');
  };
  const trashOut = () => {
    // console.log('out');
    setIconTrash('bi bi-trash3 text-muted');
  };

  const clickRemoveName = () => {

    props.passItemUserId(props.id);
    // console.log(props.id);

  };

  return (
    <div className="col-md-6 col-lg-3">
      <div
        className="card"
      >
        <div className="card-body">
          <div className="row justify-content-between align-items-center">
            
            <div className="col-md-auto col-sm-10">
              <h5 className="card-text">
                <span className="me-3">
                  <i className={gender} style={genderColor}></i>
                </span>
                {props.name}
              </h5>
            </div>

            <div className="col-md-auto pt-2 col-sm-1 pe-3">
              <h4 className="icon">
                <i onClick={clickRemoveName} className={iconTrash} onMouseEnter={trashEnter} onMouseLeave={trashOut}></i>
              </h4>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default UserNamesCards;
