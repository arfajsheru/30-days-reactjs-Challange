const ButtonComponet = ({BmiCalculate, reloadhandle}) => {
  return (
    <div className="Button_container">
      <button
        type="button"
        className="btn btn-primary button-row"
        onClick={BmiCalculate}
      >
        submit
      </button>
      <button
        type="button"
        className="btn btn-primary button-row"
        onClick={ reloadhandle}
      >
        Reload
      </button>
    </div>
  );
};

export default ButtonComponet;
