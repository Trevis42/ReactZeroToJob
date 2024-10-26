import { useRef, useEffect } from 'react';
export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (tasklist || task.id) inputRef.current.focus();
  }, [task.id, tasklist]);

  const handleSubmit = e => {
    e.preventDefault();
    // inputRef.current.focus();
    if (task.id) editTask(e);
    else addTask(e);
  };

  const editTask = e => {
    const date = new Date();
    const updatedTaskList = tasklist.map(t =>
      t.id === task.id
        ? {
            id: task.id,
            name: task.name,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
          }
        : t
    );
    setTasklist(updatedTaskList);
    setTask({});
  };

  const addTask = e => {
    // prevent form submission if input field is empty
    if (e.target.task.value.trim() === '') {
      return;
    }
    // newTask objest with id, name, and time properties
    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };
    setTasklist([...tasklist, newTask]);
    setTask({});
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          ref={inputRef}
          value={task.name || ''}
          autoComplete="off"
          placeholder="Add a task..."
          maxLength={25}
          onChange={e => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? 'Update' : 'Add'}</button>
      </form>
    </section>
  );
};
