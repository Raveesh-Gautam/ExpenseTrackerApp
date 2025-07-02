// Write your code at relevant places in the code below:

import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found</p>;

 if (filteredExpenses.length === 1) {
  expensesContent = (
    <>
      <ExpenseItem
        key={filteredExpenses[0].id}
        title={filteredExpenses[0].title}
        date={filteredExpenses[0].date}
        price={filteredExpenses[0].price}
      />
      <p className="only-one-expense-message">
        Only one expense found. Please add more
      </p>
    </>
  );
}



  if (filteredExpenses.length > 1) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.price}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
