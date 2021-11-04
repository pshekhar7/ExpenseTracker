import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 2300,
    date: new Date(2021, 10, 1),
  },
  {
    id: 'e2',
    title: 'Diwali Shopping',
    amount: 5000,
    date: new Date(2021, 9, 21),
  },
  {
    id: 'e3',
    title: 'IPhone',
    amount: 70000,
    date: new Date(2021, 8, 30),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addNewExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
