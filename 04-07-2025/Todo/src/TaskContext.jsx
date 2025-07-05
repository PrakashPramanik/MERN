import { createContext, useContext, useState } from 'react';

const TaskContext = createContext();
export const useTask = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if (text.trim()) {
      const newTask = {
        id: tasks.length,
        text,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    const reindexed = updatedTasks.map((task, index) => ({
      ...task,
      id: index,
    }));
    setTasks(reindexed);
  };

  const clearCompleted = () => {
    const updatedTasks = tasks.filter(task => !task.completed);
    const reindexed = updatedTasks.map((task, index) => ({
      ...task,
      id: index,
    }));
    setTasks(reindexed);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, toggleComplete, editTask, clearCompleted }}
    >
      {children}
    </TaskContext.Provider>
  );
};
