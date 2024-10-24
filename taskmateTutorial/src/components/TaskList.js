import { useState } from 'react';
import { TaskCard } from './TaskCard';
import './TaskList.css';

export const TaskList = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(true);

  const handleDelete = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
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
