import React, { useState } from "react";
import PersonItem from "../personItem/personItem";
import BrBad from "../../services/brBad";

import "./personTable.css";

export default function PersonTable() {
  const [table, setTable] = useState([]);
  const brBad = new BrBad();
  brBad.getAllCharacters().then((items) => {
    setTable(
      items.map((item, i) => {
        return <PersonItem person={item} key={item.id} />;
      })
    );
  });
  return <div className="personsTable">{table}</div>;
}
