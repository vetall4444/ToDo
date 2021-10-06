import React,{useState} from 'react';
import './addItemForm.css';

export default function AddItemForm({addItems}){
  const [value,setValue] = useState('');
  function changeText(e){
    setValue(e.target.value )
  }

  function addItem(event){
    event.preventDefault();
    if(value!==''){
      addItems({text:value,done:false});
      setValue('');
    }
  }
  return(
    <form onSubmit={addItem}>
      <input type="text" value={value} onChange={changeText}placeholder="какую задачу вы хотите добавить?"/>
      <input type="submit" />
    </form>
  )
}