import React, { useState } from "react";
import HeaderApp from "./components/header/header";
import AddItemForm from "./components/addItemForm/addItemForm";
import ItemList from "./components/itemList/itemList";
import FilterItems from "./components/filterItems/filterItems";
import PersonTable from "./components/personTable/personTable";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [items, setItems] = useState([
    { text: "Купить машину", done: true, key: 1 },
    { text: "Посадить дерево", done: false, key: 2 },
    { text: "Построить дом", done: false, key: 3 },
    { text: "Вырастить сына", done: true, key: 4 },
  ]);
  const [filtered, setFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");

  function addItems(newItem) {
    const key = items.length + 1;
    const itemToAdd = { ...newItem, key };
    setItems([...items, itemToAdd]);
  }

  function updateItems(numItem) {
    const itemToUpdate = items[numItem - 1];
    itemToUpdate.done = !itemToUpdate.done;

    const prev = items.slice(0, numItem - 1);
    const next = items.slice(numItem);

    setItems([...prev, itemToUpdate, ...next]);
  }
  function changeFiltered() {
    setFiltered(!filtered);
  }
  function filterItems() {
    if (filtered) {
      return items.filter((item) => item.done === true);
    } else {
      return items;
    }
  }
  function setSearchItems(text) {
    setSearchText(text);
  }
  function searchItems(items) {
    if (searchText !== "" && searchText !== null) {
      return items.filter((item) => {
        return item.text.includes(searchText);
      });
    } else {
      return items;
    }
  }

  let filteredItems = searchItems(filterItems());

  return (
    <>
      <Router>
        <HeaderApp />
        <Route path="/" exact>
          <FilterItems filter={changeFiltered} search={setSearchItems} />
          <AddItemForm addItems={addItems} />
          <ItemList items={filteredItems} updateItems={updateItems} />
        </Route>
        <Route path="/bad" component={PersonTable} />
      </Router>
    </>
  );
}

export default App;
