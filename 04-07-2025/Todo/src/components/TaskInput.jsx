import { useState } from 'react';
import { useTask } from '../TaskContext';
import '../App.css'

const TaskInput = () => {
  const [text, setText] = useState('');
  const { addTask, clearCompleted, tasks } = useTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  const hasCompletedTasks = tasks.some(task => task.completed);

  return (
    <div
      style={{
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type="text"
            placeholder="Enter a task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              padding: '8px 12px',
              minWidth: '250px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginRight: '10px',
              outline: 'none',
            }}
          />
          <button type="submit" className="add-button">
            Add
          </button>
        </div>
      </form>

      {hasCompletedTasks && (
        <button
          onClick={clearCompleted}
          style={{
            marginTop: '15px',
            padding: '6px 12px',
            backgroundColor: '#ff4d4d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          🗑️ Clear Completed
        </button>
      )}
    </div>
  );
};

export default TaskInput;
