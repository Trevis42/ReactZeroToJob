import './TaskCard.css';

export const TaskCard = ({ id, taskName, completed, handleDelete }) => {
  return (
    <div className="taskcard">
      <li className={completed ? 'completed' : 'incomplete'}>
        <span>
          {id} - {taskName}
        </span>
        <button
          onClick={() => handleDelete(id)}
          className="delete">
          Delete
        </button>
      </li>
    </div>
  );
};
