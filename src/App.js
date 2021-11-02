import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
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

  const addNewExpense = (expenseData) => {
    console.log('App.js');
    console.log(expenseData);
    expenses.push(expenseData);
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
