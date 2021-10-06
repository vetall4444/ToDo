import React from "react";
import ToDoItem from "../toDoItem/toDoItem";
import "../itemList/itemList.css";

export default function ItemList({ items, updateItems }) {
  const toDoItems = items.map((item) => {
    return <ToDoItem item={item} key={item.key} updateItems={updateItems} />;
  });

  return <ul>{toDoItems}</ul>;
}
