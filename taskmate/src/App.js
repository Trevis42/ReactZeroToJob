/** @format */

import './App.css';
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'React Training', completed: true },
    { id: 2, name: 'Java Training', completed: false },
    { id: 3, name: 'Python Training', completed: false },
  ]);

  const [show, setShow] = useState(true);

  const handleDelete = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleAddTask = (name, completed) => {
    const newTask = { id: tasks.length + 1, name, completed };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map(({ id, name, completed }) => (
            <li key={id} className={completed ? 'completed' : 'incomplete'}>
              {/* <input type="checkbox" checked={completed} /> */}
              <span>
                {id} - {name}
              </span>
              <button onClick={() => handleDelete(id)} className="delete">
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
