import React, { useState } from "react";
import "./toDoItem.css";

export default function ToDoItem({ item, updateItems }) {
  const [checked, setChecked] = useState(item.done);

  const styleClasses = checked ? "chekedItem" : "";

  function changeChecked() {
    setChecked(!checked);
    updateItems(item.key);
  }
  return (
    <>
      <li>
        <input
          type="checkBox"
          checked={checked}
          onChange={changeChecked}
        ></input>
        <p className={styleClasses}>{item.text}</p>
      </li>
    </>
  );
}
