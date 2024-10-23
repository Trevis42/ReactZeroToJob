import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
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

  const handleAddTask = (name, completed) => {
    const newTask = { id: tasks.length + 1, name, completed };
    setTasks([...tasks, newTask]);
  };

  return (
    <section className="tasklist">
      <h1>Task List</h1>
      <ul>
        <button
          className="trigger"
          onClick={() => setShow(!show)}>
          Toggle
        </button>
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
      <BoxCard result="success">
        <p className="title">Offer notification</p>
        <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </BoxCard>

      <BoxCard result="warning">
        <p className="title">Cookie notification</p>
        <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nihil.</p>
      </BoxCard>
    </section>
  );
};
