function UserNamesFilter(props) {
  const onClickAddNameHandler = () => {
    props.onClickAddBaby(props.addBaby);
    // console.log(props.addBaby);
  };

  const onClickClearAllHandler = () => {
    props.onClickClearAll();
    // console.log(props.addBaby);
  };

  const onClickFightHandler = () => {
    props.onClickFight();
    // console.log(props.addBaby);
  };

  return (
    <div className="container text-start">
      <div className="row justify-content-between align-items-center g-3">
        
        <div className="col-md-auto col-sm-auto">
          <button
            type="button"
            onClick={onClickClearAllHandler}
            className="btn btn-outline-light"
          >
            <i className="bi bi-trash3-fill"></i>
            {/* Delete All */}
          </button>
        </div>

        <div className="col-md-auto col-sm-auto">
          <button
            type="button"
            onClick={onClickFightHandler}
            className="btn btn-danger"
          >
            <i className="bi bi-fire me-2"></i>
            Fight
          </button>
        </div>

        <div className="col-md-auto col-sm-auto">
          <button
            type="button"
            onClick={onClickAddNameHandler}
            className="btn btn-primary"
          >
            <i className="bi bi-plus-circle me-2"></i>
            Add Name
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserNamesFilter;
