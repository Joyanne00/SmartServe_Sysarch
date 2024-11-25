// components/TaskManager.jsx

import React, { useState } from 'react';
import './TaskManagement.css';

const TaskManagement = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState('');
  const [taskStatus, setTaskStatus] = useState('Pending');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), title: newTask, status: taskStatus },
      ]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="task-manager">
      <h2>Add a New Task</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task description"
      />
      <select
        value={taskStatus}
        onChange={(e) => setTaskStatus(e.target.value)}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>

      <div className="tasks-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            <h4>{task.title}</h4>
            <p>Status: {task.status}</p>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManagement;
