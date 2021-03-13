import './login.css';
import React, { useState } from 'react';


const DoItem = (props) => {
return(
  <div className = "list-item">
  <li>
      {props.text}
  </li>
   <pre className="remove" onClick={() =>{
     props.onChecked(props.id);}}>remove</pre>
  </div>
  )
}
export default DoItem;