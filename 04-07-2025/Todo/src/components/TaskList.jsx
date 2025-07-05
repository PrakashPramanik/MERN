import { useTask } from '../TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useTask();

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
