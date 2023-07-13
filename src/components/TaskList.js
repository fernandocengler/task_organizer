import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const handleCheckboxChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleCheckboxChange(index)}
          />
          <span>{task.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
