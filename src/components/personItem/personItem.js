import React from "react";
import "./personItem.css";

export default function PersonItem({ person }) {
  return (
    <div className="personBlock">
      <img src={person.img} alt="person" />
      <h3>
        {person.name} ({person.nickname})
      </h3>
      <p>{person.birthday}</p>
    </div>
  );
}
