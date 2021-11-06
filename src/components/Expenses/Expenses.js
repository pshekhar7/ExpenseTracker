import './Expenses.css';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import { useState } from 'react';
import ExpenseChart from './ExpenseChart';

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
        <ExpenseChart expenses={filteredData} />
        <ExpenseList items={filteredData} />
      </Card>
    </div>
  );
};

export default Expenses;
