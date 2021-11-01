import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 2300,
      date: new Date(2021, 10, 1),
    },
    {
      id: "e2",
      title: "Diwali Shopping",
      amount: 5000,
      date: new Date(2021, 9, 21),
    },
    {
      id: "e3",
      title: "IPhone",
      amount: 70000,
      date: new Date(2021, 8, 30),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
