import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
    console.log(`Count: ${count}`);
  };

  const handleSubtract = () => {
    setCount(count - 1);
    console.log(`Count: ${count}`);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className="add">
          ADD
        </button>
        <button onClick={handleSubtract} className="sub">
          SUB
        </button>
        <button onClick={handleReset} className="reset">
          RESET
        </button>
      </div>
    </div>
  );
};

export default App;
