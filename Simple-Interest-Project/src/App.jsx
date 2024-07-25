import './App.css'
import Title from './Componet/Titel'
import InputBox from './Componet/InputBox'
import DisplayBox from './Componet/DisplayBox';
import { useState } from 'react';


function App() {
  const [addInterest, setAddInterest] = useState(0);

  const handleButtonCalculate = (PrincipalAmount,RateInterestAmount,TimePereod) => {
    if (
      isNaN(PrincipalAmount) ||
      isNaN(RateInterestAmount) ||
      isNaN(TimePereod) ||
      PrincipalAmount <= 0 ||
      RateInterestAmount <= 0 ||
      TimePereod <= 0
    ) {
      alert("Please enter valid numbers for all fields");
    }
    const SI = (PrincipalAmount * RateInterestAmount * TimePereod) / 100;
    setAddInterest(SI);
  }
  return (

    <div className="container">
      <div className="border-box">
        <Title />
        <DisplayBox IntreseCalculate={addInterest}></DisplayBox>
        <InputBox onCaculateButton={handleButtonCalculate}
        />
      </div>
    </div>
  )
  
}

export default App
