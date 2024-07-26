import TodoItem from "./TodoItem";

const TodoItems = ({ todoitems, OnDeleteItem }) => {
  return (
    <>
      <div className="items-container">
        {todoitems.map((item) => (
          <TodoItem
            todoName={item.name}
            todoDate={item.date}
            key={item.name}
            OnDeleteItem={OnDeleteItem}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
