const DisplayMessage = ({bmi, message}) => {
  return (
    <div className="center">
      <h3>Your BMI is : {bmi}</h3>
      <p className="message">{message}</p>
    </div>
  );
};

export default DisplayMessage;
