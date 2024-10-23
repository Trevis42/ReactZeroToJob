export const TaskCard = ({ id, taskName, completed, handleDelete }) => {
  return (
    <>
      <li className={completed ? 'completed' : 'incomplete'}>
        {/* <input type="checkbox" checked={completed} /> */}
        <span>
          {id} - {taskName}
        </span>
        <button
          onClick={() => handleDelete(id)}
          className="delete">
          Delete
        </button>
      </li>
    </>
  );
};
