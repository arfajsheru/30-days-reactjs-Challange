const ButtonComponet = ({BmiCalculate, reloadhandle}) => {
  return (
    <div className="Button_container">
      <button
        type="button"
        onClick={BmiCalculate}
      >
        Calculate Bmi
      </button>
      <button
        type="button"
     
        onClick={ reloadhandle}
      >
        Reload
      </button>
    </div>
  );
};

export default ButtonComponet;
