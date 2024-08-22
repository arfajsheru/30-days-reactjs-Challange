import React, { useRef, useState } from 'react'

const AgeCalculator = () => {
    const birthdateRef = useRef();
    const[age,setAge] = useState("0");
    const[categoryage, setCategoryAge] =useState();

    const handleCalculateAge = () => {
        const birthdate = birthdateRef.current.value;
        if(!birthdate){
            alert("Pleas enter your age");
            return
        }
        const today = new Date();
        const birthdateDate = new Date(birthdate);
 
        let age = today.getFullYear() - birthdateDate.getFullYear();
        const monthDiff = today.getMonth() - birthdateDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
            age--;
        }
        if (age < 13) {
            setCategoryAge("You are a child.");
        } else if (age >= 13 && age <= 19) {
            setCategoryAge("You are a teenager.");
        } else if (age >= 20 && age <= 35) {
            setCategoryAge("You are a young.");
        } else if (age > 35 && age <= 60) {
            setCategoryAge("You are middled-aged.");
        } else {
            setCategoryAge("You are old.");
        }
        setAge(age);
    };

    const resetForm = () => {
        birthdateRef.current.value = '';
        setCategoryAge("");
        setAge(0);

      };
    
    

  return (
    <div className="item-container">
        <h1>Age Calulator</h1>
        <div className="age-information">
            <p>The Age calculator can determine the age or interval two dates. The claculator age will be display in year.</p>
        </div>
        <div className="items">
        <div className="left-col">
            <h1>Date of Birth</h1>
                <input type="date" ref={birthdateRef}/>
                <div className="button-container">
                    <button onClick={handleCalculateAge}>Calcualte Age</button>
                    <button onClick={resetForm}>Reset</button>
                </div>
            
        </div>

        <div className="right-col">
            <h1>{categoryage}</h1>
            <div className="show-age">
            <h1>{age > 0 ? `${age}`: "0"}</h1>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default AgeCalculator