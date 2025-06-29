// Write your code at the relevant places in the code below

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  let cnt = 0;
  function handleButtonClick(event) {
    
    console.log("Button clicked");
    cnt++;
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={handleButtonClick}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
