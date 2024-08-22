import React, { useState } from "react";
import "./Home.css";
const Home = ({ Addtransition, transaction, expencetotal, incometotal }) => {
  const [addbtn, setAddbtn] = useState(false);
  const [expence, setExpence] = useState("EXPENCE");
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [searchterm, setSearchTerm] = useState("");

  const addtransition = () => {
    if (!amount || !desc) {
      alert("Please fill the form");
      return; 
    }

    Addtransition({
      amount: Number(amount),
      desc,
      expence,
      id: Date.now(),
    });
    setAddbtn(true);
    setAmount("");
    setDesc("");
  };

  const filteredTransactions = transaction.filter((item) =>
    item.desc.toLowerCase().includes(searchterm.toLowerCase())
  );
  return (
    <div className="home-container">
      <div className="top-container">
        <h3 className="balance-title">
          Balance: ${incometotal - expencetotal}
        </h3>
        <button className=" primary-button" onClick={() => setAddbtn(!addbtn)}>
          {addbtn ? "Cancel" : "Add"}
        </button>
      </div>
      {addbtn && (
        <div className="input-container">
          <div className="input-items">
            <input
              type="number"
              value={amount}
              placeholder="Amount"
              onChange={(e) => setAmount(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="categaory">
            <div className="checked-btn">
              <input
                type="radio"
                value="EXPENCE"
                checked={expence === "EXPENCE"}
                onChange={(e) => setExpence(e.target.value)}
              />
              <label htmlFor="Expence">Expence</label>
            </div>
            <div className="checked-btn">
              <input
                type="radio"
                value="INCOME"
                checked={expence === "INCOME"}
                onChange={(e) => setExpence(e.target.value)}
              />
              <label htmlFor="Income">Income</label>
            </div>
          </div>
          <div class="button-borders">
            <button class="primary-button" onClick={() => addtransition()}>
              ADD TRANSACTION
            </button>
          </div>
        </div>
      )}

      <div className="type-containers">
        <div className="type-container">
          <p className="type-title">Expence</p>
          <h2 className="price">${expencetotal}</h2>
        </div>
        <div className="type-container">
          <p className="type-title">Income</p>
          <h2 className="price">${incometotal}</h2>
        </div>
      </div>

      <div className="expence-transaction">
        <div className="expence-top">
          <h2>Transaction history</h2>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="transation-items">
          {filteredTransactions.map((item) => (
            <div key={item.id} className="transation-item" >
              <span className="amount"> ${item.amount}</span>
              <span className="desc"> {item.desc}</span>
              <span
                className="types"
                style={{
                  backgroundColor: item.expence === "EXPENCE" ? "red" : "green",
                }}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
