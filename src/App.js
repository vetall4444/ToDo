import React,{useState} from "react";
import HeaderApp from "./components/header/header";
import AddItemForm from './components/addItemForm/addItemForm'
import ItemList from './components/itemList/itemList'

function App() {
  const [items,setItems] =useState([
    {text:'Купить машину', done: true,key:1},
    {text:'Посадить дерево', done: false,key:2},
    {text:'Построить дом', done: false,key:3},
    {text:'Вырастить сына', done: true,key:4},
  ]);

  function addItems(newItem){
    const key=items.length+1;
    const itemToAdd= {...newItem,key}
    setItems([...items,itemToAdd]);
  }

  function updateItems(numItem){
    const itemToUpdate = items[numItem-1];
    itemToUpdate.done=!itemToUpdate.done;

    const prev=items.slice(0,numItem-1);
    const next=items.slice(numItem);

    setItems([...prev,itemToUpdate,...next]);
  }

  console.log(items);
  return (
    <>
      <HeaderApp/>
      <AddItemForm addItems={addItems} />
      <ItemList items={items} updateItems={updateItems}/>
    </>
  );
}

export default App;
