import UserNamesFilter from "./UserNamesFilter";

function UserNamesHeader(props) {
  const addChangeHandler = (addBabyState) => {
    props.onClickAddBaby(addBabyState);
  };

  const clearAllHandler = () => {
    props.clearAll();
  };

  const fight = () => {
    props.fightWinnerName();
  };

  return (
    <div>
      <div className="row justify-content-between align-items-center">
        <div className="col-md-auto col-sm-4">
          <h3 className="text-white">
            {/* <i className="bi bi-emoji-laughing"></i> */} Your Baby Names
          </h3>
        </div>
        <div className="col-md-auto col-sm-8">
          <UserNamesFilter
            addBaby={props.addBaby}
            onClickAddBaby={addChangeHandler}
            onClickClearAll={clearAllHandler}
            onClickFight={fight}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default UserNamesHeader;
