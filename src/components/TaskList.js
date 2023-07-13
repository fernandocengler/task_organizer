import React, { useState } from 'react';
import '../TaskList.css';



const TaskList = () => {
  const [tasks, setTasks] = useState([
    { content: 'Tarefa 1',completed: false },
    { content: 'Tarefa 2',completed: false },
    { content: 'Tarefa 3',completed: false },
    { content: 'Tarefa 4',completed: false },
    { content: 'Tarefa 5',completed: false },
    { content: 'Tarefa 6',completed: false },
    { content: 'Tarefa 7',completed: false },
    { content: 'Tarefa 8',completed: false },
    { content: 'Tarefa 9',completed: false },
    { content: 'Tarefa 10',completed: false },
    { content: 'Tarefa 11',completed: false },
    { content: 'Tarefa 12',completed: false },
    { content: 'Tarefa 13',completed: false }
  ]);

  const handleTaskToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list-container">
      {tasks.map((task, index) => (
        <div key={index} className={`task ${task.completed ? 'completed' : ''}`}>
          <label>
            <input
              className="task-checkbox"
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskToggle(index)}
            />
            <span className="task-content">{task.content}</span>
          </label>
          <p>{task.timestamp}</p>
        </div>
      ))}
    </div>
  );
  
};

export default TaskList;
