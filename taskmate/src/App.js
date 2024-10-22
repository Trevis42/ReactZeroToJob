import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
    console.log(`Counter: ${count}`);
  };

  const handleSubtract = () => {
    setCount(count - 1);
    console.log(`Counter: ${count}`);
  };

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button className="add" onClick={handleAdd}>
          ADD
        </button>
        <button className="sub" onClick={handleSubtract}>
          SUB
        </button>
      </div>
    </div>
  );
};

export default App;
