export const AddTask = ({ tasklist, setTasklist }) => {
  const handleSubmit = e => {
    e.preventDefault();
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
    //reset input field
    e.target.task.value = '';
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="Add a task..."
          maxLength={25}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};
