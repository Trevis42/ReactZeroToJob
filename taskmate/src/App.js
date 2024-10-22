import './App.css';

const App = () => {
  let counter = 0;
  return (
    <div className="App">
      <div className="box">
        <p>{counter}</p>
        <button className="add" onClick={() => counter++}>
          ADD
        </button>
        <button className="sub" onClick={() => counter++}>
          SUB
        </button>
      </div>
    </div>
  );
};

export default App;
