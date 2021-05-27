import "./App.css";
import FruitContainer from "./components/FruitContainer";

function App() {
  const fruits = [
    "apple",
    "cherry",
    "pineapple",
    "kiwi",
    "banana",
    "strawberry",
    "blueberry",
    "mango",
    "blackberry",
    "watermelon",
  ];

  return (
    <div className="App">
      <h1>Fruit Filter</h1>
      <FruitContainer fruits={fruits} />
    </div>
  );
}

export default App;
