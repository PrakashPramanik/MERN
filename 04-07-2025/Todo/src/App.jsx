import { useState } from 'react';
import { TaskProvider } from './TaskContext';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <TaskProvider>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: darkMode ? '#000' : '#f8f8f8',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            backgroundColor: '#fff',
            color: '#000',
            padding: '30px 20px',
            borderRadius: '16px',
            boxShadow: '0 0 15px rgba(0,0,0,0.2)',
            width: '100%',
            maxWidth: '500px',         
            minWidth: '280px',         
            textAlign: 'center',
          }}
        >
          <h2 style={{ marginBottom: '10px' }}>
            📝 <span style={{ fontWeight: 'bold' }}>To-Do List</span>
          </h2>

          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              marginBottom: '20px',
              padding: '8px 16px',
              borderRadius: '8px',
              backgroundColor: darkMode ? '#333' : '#fff',
              color: darkMode ? '#fff' : '#000',
              border: '1px solid #ccc',
              cursor: 'pointer',
              transition: '0.3s ease',
            }}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>

          <TaskInput />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;
