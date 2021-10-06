import React from 'react';
import '../header/header.css';

export default function HeaderApp(){
  
  return(
    <>
      <header>
        <div className="headerApp">
          <a href="/">ToDoList</a>
          <div>
            <a href="/">Первая фишка</a>
            <a href="/">Вторая фишка</a>
          </div>
        </div>
      </header>
    </>
  )
}