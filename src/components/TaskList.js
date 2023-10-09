import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleTaskCompletion, deleteTask, editTask }) {
  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;