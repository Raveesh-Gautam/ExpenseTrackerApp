import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
const [isEditing,setIsEditing]=useState(false);

   const saveExpenseDataHandler=(enterdData)=>{
    console.log(enterdData);
    const expenseData={...enterdData,id:Math.random().toString()};
    console.log(expenseData);
     props.onAddExpense(expenseData);
     setIsEditing(false);
 }
 const startEditingHandler=()=>{
      setIsEditing(true);
 }
  const stopEditingHandler=()=>{
      setIsEditing(false);
 }
 const CancleHandler=()=>{
    setIsEditing(false);
 }

  return (
    <div className="new-expense">
        {!isEditing&& (
        <button onClick={startEditingHandler}>Add Expense</button>
      )}
      {
        isEditing &&

        (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} 
        onCancel={stopEditingHandler}/>
       
      
    )
      }
       
    </div>
  );
};

export default NewExpense;
