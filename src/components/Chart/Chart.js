import React from 'react'
import ChartBar from './ChartBar';
import "./Chart.css";
const Chart = (props) => {
   const expensesOnlyArray=props.chartExpenses.map((monthExpenseData)=>{
    return monthExpenseData.price;
   })
    const max=Math.max(...expensesOnlyArray);
    console.log(max);
    const chartData = [
  { expenseMonth: "JAN", expenseValue: 0 },
  { expenseMonth: "FEB", expenseValue: 0 },
  { expenseMonth: "MAR", expenseValue: 0 },
  { expenseMonth: "APR", expenseValue: 0 },
  { expenseMonth: "MAY", expenseValue: 0 },
  { expenseMonth: "JUN", expenseValue: 0 },
  { expenseMonth: "JUL", expenseValue: 0 },
  { expenseMonth: "AUG", expenseValue: 0 },
  { expenseMonth: "SEP", expenseValue: 0 },
  { expenseMonth: "OCT", expenseValue: 0 },
  { expenseMonth: "NOV", expenseValue: 0 },
  { expenseMonth: "DEC", expenseValue: 0 },
];

for(let i=0;i<props.chartExpenses.length;i++){
    chartData[props.chartExpenses[i].date.getMonth()].expenseValue+=props.chartExpenses[i].price;
}
    console.log(chartData);

  return (
    <div className='chart'>
        {chartData.map((monthData)=>{
            return <ChartBar
            key={monthData.expenseMonth}
            label={monthData.expenseMonth}
            value={monthData.expenseValue}
            maxValue={max}
             />
        })}
    </div>
  )
}

export default Chart