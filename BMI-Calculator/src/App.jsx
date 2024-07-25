import { useState } from "react";
import "./App.css";
import HeaderTitle from "./Componet/HeaderTitle";
import DisplayInput from "./Componet/DisplayInput";
import ButtonComponet from "./Componet/ButtonComponet";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const CalculateBmi = (event) => {
    event.preventDefault();
    if (weight === 0 && height === 0) {
      alert(`please enter a valid weight and height`);
    } else {
      let weightLbs = weight * 2.20462;
      const bmi = (weightLbs / (height * height)) * 703;
      setBmi(bmi.toFixed(2));
      if (bmi < 18) {
        setMessage(`You are underweight`);
      } else if (bmi > 18 && bmi < 24) {
        setMessage(`You are Normal weight`);
      } else if (bmi > 25 && bmi < 29) {
        setMessage(`You are Overweight`);
      } else {
        setMessage(`You are Obese`);
      }
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="card form" style={{ width: "25rem" }}>
        <HeaderTitle></HeaderTitle>

        <DisplayInput setWeightTab={setWeight} setHeightTab={setHeight}></DisplayInput>
        <ButtonComponet BmiCalculate={CalculateBmi} reloadhandle={handleReload}></ButtonComponet>
        <div className="center">
          <h3>Your BMI is : {bmi}</h3>
          <p className="message">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
