// Write your code at the relevant places in the code below

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
const [title,setTitle]=useState(props.title)
  function handleButtonClick(event) {
    setTitle("New Title");
    console.log("Button clicked");
   
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={handleButtonClick}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
