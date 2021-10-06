import React, { useState } from "react";
import "../filterItems/filterItems.css";

export default function FilterItems({ filter, search }) {
  const [checkedFilter, setCheckedFilter] = useState(false);

  const toggleFilter = () => {
    filter();
    setCheckedFilter(!checkedFilter);
  };
  const changeText = (e) => {
    search(e.target.value);
  };
  return (
    <div className="filter-search">
      <form className="search">
        <input
          type="text"
          onChange={changeText}
          placeholder="Какую задачу найти?"
        />
      </form>
      <div className="filter">
        <input
          type="checkbox"
          checked={checkedFilter}
          onChange={toggleFilter}
        ></input>
        <p>Отобразить только выполненные задачи</p>
      </div>
    </div>
  );
}
