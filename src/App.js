import { useState } from "react";

import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  const decrement = () => {
    if (number === 0) return;

    setNumber(number - 1);
  };
  const increment = () => {
    setNumber(number + 1);
  };

  return (
    <div className='App'>
      <h2 className='display-number'> {number} </h2>
      <div className='button-control'>
        <button className='btn' onClick={decrement}>
          -
        </button>
        <button className='btn' onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
