import { useRef } from "react";


const AddTodo = ({OnNewItem}) => {
  const TodoNameElement = useRef();
  const TodoDateElement = useRef();


  const handleButtonClick = () => {
    const todoname = TodoNameElement.current.value;
    const tododate = TodoDateElement.current.value;
    TodoNameElement.current.value="";
    TodoDateElement.current.value="";
    OnNewItem(todoname,tododate);
  }
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Eneter todo here" 
          ref={TodoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" 
          ref={TodoDateElement}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-btn"
          onClick={handleButtonClick}
          >Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
