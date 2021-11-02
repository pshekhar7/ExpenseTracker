import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import { useState } from 'react';

const Expenses = (props) => {
  const expenses = props.expenses;
  const [chosenYear, setYear] = useState('2021');
  const selectedYearHandler = (year) => {
    console.log(year);
    setYear(year);
  };
  const expenseFilterProps = {
    onSelectedYear: selectedYearHandler,
    currentYear: chosenYear,
  };
  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter {...expenseFilterProps} />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
