const DisplayBox = ({IntreseCalculate}) => {
    return <div className="display-box">
    <div className="display-money">
      <h1>&#8377;{IntreseCalculate}</h1>
    </div>
    <div className="display-message">
      <p>Simple Interest</p>
    </div>
  </div>
}

export default DisplayBox;