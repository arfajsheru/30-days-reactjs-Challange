import * as React from "react";
import TextField from "@mui/material/TextField";
import { useRef } from "react";



const InputBox = ({onCaculateButton}) => {
  const PrincipalAmountElement = useRef();
  const RateOfInterestElement = useRef();
  const TimePereodElement = useRef();

 
  const handleButtoClick = (event) => {
    event.preventDefault();
    const PrincipalAmount = PrincipalAmountElement.current.value;
    const RateInterestAmount = RateOfInterestElement.current.value;
    const TimePereod = TimePereodElement.current.value;
    PrincipalAmountElement.current.value = "";
    RateOfInterestElement.current.value = "";
    TimePereodElement.current.value = "";
    onCaculateButton(PrincipalAmount,RateInterestAmount,TimePereod)
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="input-container">
      
      <TextField
        id="outlined-multiline-flexible"
        label="Principal amount"
        className="input-box"
        multiline
        maxRows={4}
        inputRef={PrincipalAmountElement}
      />
      <TextField
        id="outlined-multiline-flexible"
        className="input-box"
        label="Rate of Interest (p.a)"
        multiline
        maxRows={4}
        inputRef={RateOfInterestElement}
      />
      <TextField
        id="outlined-multiline-flexible"
        className="input-box"
        label="Time pereod"
        multiline
        maxRows={4}
        inputRef={TimePereodElement}
      />

      <div className="button-container">
        <button className="CalCulate" onClick={handleButtoClick}>
          CALCULATE
        </button>
        <button className="reset" onClick={handleReload}>RESET</button>
      </div>
    </div>
  );
};

export default InputBox;
