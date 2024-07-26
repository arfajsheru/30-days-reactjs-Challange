import AddTodo from "./Componet/AddTodo";
import Title from "./Componet/Title";
import TodoItems from "./Componet/TodoItems";
import WelcomeMessage from "./Componet/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {

  const [todoitems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    setTodoItems((CurrValue) => [...CurrValue,{ name: itemName, date: itemDate }]);
  };

  const hadnleDeleteItem = (itemName) => {
    const deleteItem = todoitems.filter((item) => item.name !== itemName);
    setTodoItems(deleteItem)
  }
  return (
    <center className="todo-container">
      <Title></Title>
      <AddTodo OnNewItem={handleNewItem} />
      {todoitems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoitems={todoitems}
      OnDeleteItem={hadnleDeleteItem}
      ></TodoItems>

    </center>
  );
}

export default App;
