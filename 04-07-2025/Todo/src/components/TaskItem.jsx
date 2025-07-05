import { useState } from 'react';
import { useTask } from '../TaskContext';

const TaskItem = ({ task }) => {
  const { removeTask, toggleComplete, editTask } = useTask();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (newText.trim()) {
      editTask(task.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <li
      style={{
        margin: '8px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: '300px',
        borderBottom: '1px solid #ccc',
        paddingBottom: '5px',
      }}
    >
      <div onClick={() => toggleComplete(task.id)} style={{
    flex: 1,
    cursor: 'pointer',
    textAlign: 'left',             
    paddingLeft: '8px',            
  }}>
        {isEditing ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
            autoFocus
          />
        ) : (
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? 'gray' : 'inherit',
            }}
          >
            {task.id+1}. {task.text}
          </span>
        )}
      </div>

      <div>
        <button
          onClick={() => setIsEditing(true)}
          style={{ marginLeft: '10px', cursor: 'pointer' }}
        >
          ✏️
        </button>
        <button
          onClick={() => removeTask(task.id)}
          style={{ marginLeft: '10px', cursor: 'pointer' }}
        >
          ❌
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
