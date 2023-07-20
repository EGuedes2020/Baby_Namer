function SuggestionFilter(props) {

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const dropdownChangePopularHandler = (event) => {
    props.onChangeCheckbox(event.target.value);
  };

  const onClickRandomHandler = () => {
    props.onClick(props.count);
    // console.log('Filter.js: ' + props.count);
  };

  return (
    <div className="container text-start">
      <div className="row justify-content-end align-items-center g-3">

        <div className="col-md-auto">
          <select
            className="form-select"
            value={props.selected}
            onChange={dropdownChangePopularHandler}
          >
            <option value="true">Popular</option>
            <option value="false">All</option>
          </select>
        </div>

        <div className="col-md-auto">
          <select
            className="form-select"
            value={props.selected}
            onChange={dropdownChangeHandler}
          >
            <option value="boy">Boy</option>
            <option value="girl">Girl</option>
            <option value="neutral">Neutral</option>
          </select>
        </div>

        <div className="col-md-auto">
          <button
            type="button"
            onClick={onClickRandomHandler}
            className="btn btn-primary"
          >
            <i className="bi bi-lightbulb-fill me-2"></i>
            New Names
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuggestionFilter;
