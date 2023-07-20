import SuggestionFilter from "./SuggestionsFilter";

function SuggestionsHeader(props) {

  const filterChangeHandler = (selectedGender) => {
    props.onChangeFilterGender(selectedGender);
  };

  const checkboxChangeHandler = (selectedPopular) => {
    props.onChangeFilterPopular(selectedPopular);
  };

  const amountChangeHandler = (currentCount) => {
    props.onClickAmount(currentCount);
  };


  return (
    <div>
      <div className="row justify-content-between align-items-center">
        <div className="col-md-auto">
          <h3 className="text-white">Suggestions</h3>
        </div>
        <div className="col-md-auto">
          <SuggestionFilter onChangeFilter={filterChangeHandler} onChangeCheckbox={checkboxChangeHandler} onClick={amountChangeHandler} count={props.count}/>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default SuggestionsHeader;
