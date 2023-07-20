import React, { useState } from "react";
import "./AddBabyModal.css";

const AddBabyModal = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredGender, setEnteredGender] = useState("boy");

  const onClickCancelHandler = () => {
    props.onClickCancel(props.addBaby);
    // console.log(props.addBaby);
  };

  const dropdownChangeGenderHandler = (event) => {
    // console.log(event.target.value);
    setEnteredGender(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //não deixa a página dar reload dps de clicar no btn
    // props.onClickSubmit(props.addBaby);

    const nameData = {
      name: enteredName,
      gender: enteredGender,
    };
    console.log(nameData); //é daqui que vejo os input submetidos dps

    props.onSaveNewName(nameData);
    setEnteredName("");
    setEnteredGender("boy");
  };

  return (
    <form onSubmit={submitHandler} className="formAddBaby">
      <h4>Add a Baby Name</h4>

      <div className="row mb-4 mt-2 g-2">
        <div className="col-md-6 col-sm-12">
          <input
            type="text"
            className="form-control"
            value={enteredName}
            placeholder="ex: David"
            onChange={nameChangeHandler}
            required
            minLength="2"
            maxLength="30"
            pattern="^[a-zA-Z\s-]+$" //n aceita acentos, mas é em en de qualquer maneira xD
            title="2- 30 Letters and - or space"
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="col-md-auto">
            <select
              className="form-select"
              value={enteredGender}
              onChange={dropdownChangeGenderHandler}
            >
              <option value="boy">Boy</option>
              <option value="girl">Girl</option>
              <option value="neutral">Neutral</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row justify-content-end g-2">
        <div className="col-md-auto ">
          <button
            type="button"
            onClick={onClickCancelHandler}
            className="btn btn-danger"
          >
            Cancel
          </button>
        </div>

        <div className="col-md-auto">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddBabyModal;
