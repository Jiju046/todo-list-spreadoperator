import React, { useState } from "react";
import Todo from "./todo";
import "../styles.css"

function App() {
  const [input, setInput] = useState("");
  const [click, setClick] = useState([]);

  function handleInput(event) {
    const value = event.target.value;
    setInput(value);
  }
  function handlePress() {
    setClick((prevValue) => {
      return [...prevValue, input];
    });
    setInput("");
  }

  function deleteInput(id) {
    setClick((prevValue) => {
      return prevValue.filter((num, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleInput} value={input} />
        <button onClick={handlePress}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {click.map((toDo, index) => (
            <Todo key={index} id={index} text={toDo} inputDel={deleteInput} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
