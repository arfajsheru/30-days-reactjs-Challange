import React, { useEffect,useState } from "react";
import Home from "./component/Home";

const App = () => {
  const [transaction, setTranssaction] = useState([]);

  const [expencetotal, setExpenceTotal] = useState(0);
  const [incometotal, setIncomeTotal] = useState(0);

  

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transaction.map((item) => {
      item.expence === "EXPENCE"
        ? (exp = exp + item.amount)
        : (inc = inc + item.amount);
    });
    setExpenceTotal(exp);
    setIncomeTotal(inc);
  };

  useEffect(() => {
    calculateBalance();
  }, [transaction]);

  const Addtransition = (item) => {
    const transactionArr = [...transaction];
    transactionArr.push(item);
    setTranssaction(transactionArr);
  };
  return (
    <div className="container">
      <div className="title">
        <h2>EXPENCE TRACKER</h2>
      </div>
      <Home
        Addtransition={Addtransition}
        transaction={transaction}
        expencetotal={expencetotal}
        incometotal={incometotal}
      />
    </div>
  );
};

export default App;
