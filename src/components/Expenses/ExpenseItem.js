//State management 
import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {

  //Stata managemet... Title je to co chci změnit, a setTitle je funkce, kterou pak volám a posílám do tí parametr
  const [title, setTitle] = useState(props.title);
  
  //Arrow function
  const clickHandeler = () => {
    //funkce, která je výš. 
    setTitle('Updated');
  };
  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandeler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
