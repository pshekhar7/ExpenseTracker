import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import { useState } from 'react';

const Expenses = (props) => {
  const [chosenYear, setYear] = useState('2021');
  const selectedYearHandler = (year) => {
    setYear(year);
  };
  const expenseFilterProps = {
    onSelectedYear: selectedYearHandler,
    currentYear: chosenYear,
  };
  const filteredData = props.expenses.filter(
    (e) => e.date.getFullYear().toString() === chosenYear
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter {...expenseFilterProps} />
        {filteredData.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
