import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseData = (savedExpenseData) => {
    props.onAddExpense({
      ...savedExpenseData,
      id: Math.random().toString(),
    });
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
