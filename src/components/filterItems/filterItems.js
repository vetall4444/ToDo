import React, { useState } from "react";
import "../filterItems/filterItems.css";

export default function FilterItems({ filter }) {
  const [checkedFilter, setCheckedFilter] = useState(false);

  const toggleFilter = () => {
    filter();
    setCheckedFilter(!checkedFilter);
  };

  return (
    <div className="filter-search">
      <form className="search">
        <input type="text" placeholder="Какую задачу найти?" />
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
