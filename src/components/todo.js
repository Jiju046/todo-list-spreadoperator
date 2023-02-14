import React from "react";

function Todo({ text, inputDel, id }) {
  // const [clicked, setClicked] = useState(false);
  // function handleClick() {
  //   setClicked((prevValue) => {
  //     return !prevValue; //like if else if true return false else return true and vice versa
  //   });
  // }

  return (
    <li
      onClick={() => {
        inputDel(id);
      }}

      // style={{ textDecoration: clicked ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
}

export default Todo;
