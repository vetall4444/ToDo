import React from "react";
import "../header/header.css";
import { Link } from "react-router-dom";

export default function HeaderApp() {
  return (
    <>
      <header>
        <div className="headerApp">
          <a href="/">ToDoList</a>
          <div>
            <Link to="/bad">Таблица во все тяжкие</Link>
            <a href="/">Вторая фишка</a>
          </div>
        </div>
      </header>
    </>
  );
}
