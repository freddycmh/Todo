import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash, faPencil, faPlus} from "@fortawesome/free-solid-svg-icons"

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;
    addTask(taskText, dueDate); // Pass the dueDate to addTask
    setTaskText('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input
          type="date" // Input field for due date
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
       <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskForm;