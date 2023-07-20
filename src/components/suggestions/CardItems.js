import React, { useState } from "react";

function CardItems(props) {
  const [iconAdd, setIconAdd] = useState("bi bi-plus-circle text-muted");

  const addEnter = () => {
    // console.log('enter');
    setIconAdd("bi bi-plus-circle text-primary");
  };
  const addOut = () => {
    // console.log('out');
    setIconAdd("bi bi-plus-circle text-muted");
  };

  const clickSaveHandler = () => {
    // console.log("teste click");

    // let yes = "bi bi-plus-circle-fill text-muted";

    // if (saved.includes(yes)) {
    //   yes = "bi bi-plus-circle-fill text-primary";
    // } else {

    const nameData = {
      id: props.id,
      name: props.name,
      gender: props.gender,
    };

    props.sendToCards(nameData);
    // }

    // setSaved(yes);
  };

  return (
    <div className="col-md-6 col-lg-3">
      <div className="card">
        <div className="card-body">
          <div className="row justify-content-between align-items-center">
            
            <div className="col-md-auto col-sm-10">
              <h5 className="card-text">{props.name}</h5>
            </div>
            
            <div className="col-md-auto pt-2 col-sm-1 pe-3">
              <h4 className="icon">
                <i
                  onClick={clickSaveHandler}
                  className={iconAdd}
                  onMouseEnter={addEnter}
                  onMouseOut={addOut}
                ></i>
              </h4>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItems;
