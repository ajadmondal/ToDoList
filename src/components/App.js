import './login.css';
import React, { useState } from 'react'
import DoItem from "./DoItem";

const App = () => {
    const [doList, setDoList] = useState([]);
    const [value, setValue] = useState("");
    function handleClick(Event){
        setDoList([...doList, value]);
    }
    function handleChange(Event){
        setValue(Event.target.value);
    }
    function handleRemove(id){
        console.log(id);
        setDoList(
            doList.filter((item, index) => (id!==index)
            )
        );
    }
    function handleEnter(Event){
        if(Event.key ==='Enter') setDoList([...doList, value]);
    }
return(
  <div className = "App">
    <p><strong>My To-Do List</strong></p>
    <label for="name"> </label>
    <input 
        className="do-item" 
        type="text" 
        placeholder= "What to do?"
        onChange= {handleChange}
        onKeyPress={handleEnter} >
    </input>
    <button 
        className = "btn" 
        onClick = {handleClick}
    > + </button>
    <div className= "do-list">
    <ol>
        {doList.map((item, index) => (
                <DoItem key ={index}
                id={index}
                onChecked={handleRemove}
                text = {item}/>
            )
        )}
    </ol>
    </div>
  </div>
  )
}
export default App;