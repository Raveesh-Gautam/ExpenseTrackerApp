import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
  const [expenseData,setExpenseData]=useState([
      { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(2024, 8, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(2023, 2, 10), price: 1 },
    { id: 4, title: "Laptop", date: new Date(2023, 9, 17), price: 200 },
  ]);

const handleAddExpense=(expense)=>{
console.log("App",expenseData);
setExpenseData((prevExpenseData)=>{
  return [expense,...prevExpenseData];
})
}

  return (
    <div>
      <h2>Let's get Started</h2>
      <NewExpense  onAddExpense={handleAddExpense}/>
      <Expenses expenses={expenseData} />
      
    </div>
  );
}

export default App;
