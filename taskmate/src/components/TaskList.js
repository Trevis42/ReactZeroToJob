import { useState } from 'react';
import { TaskCard } from './TaskCard';
import './TaskList.css';

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, taskName: 'React Training', completed: true },
    { id: 2, taskName: 'Java Training', completed: false },
    { id: 3, taskName: 'Python Training', completed: false },
  ]);

  const [show, setShow] = useState(true);

  const handleDelete = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleAddTask = (taskName, completed) => {
    const newTask = { id: tasks.length + 1, taskName, completed };
    setTasks([...tasks, newTask]);
  };

  return (
    <section className="tasklist">
      <ul>
        <div className="header">
          <h1>TaskList</h1>
          <button
            className="trigger"
            onClick={() => setShow(!show)}>
            {show ? 'Hide Tasks' : 'Show Tasks'}
          </button>
        </div>
        {show &&
          tasks.map(({ id, taskName, completed }) => (
            <TaskCard
              key={id}
              id={id}
              taskName={taskName}
              completed={completed}
              handleDelete={handleDelete}
            />
          ))}
      </ul>
    </section>
  );
};
