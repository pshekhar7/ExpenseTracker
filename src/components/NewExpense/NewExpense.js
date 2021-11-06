import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const [hideForm, setHideForm] = useState(true);
  const saveExpenseData = (savedExpenseData) => {
    props.onAddExpense({
      ...savedExpenseData,
      id: Math.random().toString(),
    });
    setHideForm(true);
  };
  const formReset = () => {
    setHideForm(true);
  };

  const onAddNewExpenseClickHandler = () => {
    setHideForm(false);
  };

  return (
    <div className='new-expense'>
      {hideForm && (
        <button onClick={onAddNewExpenseClickHandler}>Add New Expense</button>
      )}
      {!hideForm && (
        <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={formReset} />
      )}
    </div>
  );
};

export default NewExpense;
