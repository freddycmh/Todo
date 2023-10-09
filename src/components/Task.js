import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash, faPencil, faPlus, faCheck, faX} from "@fortawesome/free-solid-svg-icons"

function Task({ task, index, toggleTaskCompletion, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(task.text);
    setEditedDueDate(task.dueDate);
  };

  const handleSaveEdit = () => {
    editTask(index, editedText, editedDueDate);
    setIsEditing(false);
  };

  const isFutureDate = (date) => {
    const today = new Date();
    const selectedDate = new Date(date);
    return selectedDate >= today;
  };

  return (
    <li className={`list-group-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <input
            type="date"
            className="form-control"
            value={editedDueDate}
            onChange={(e) => {
              if (isFutureDate(e.target.value)) {
                setEditedDueDate(e.target.value);
              } else {
                // Handle invalid date selection here
                alert('Please select a future date.');
              }
            }}
          />
          <div className="input-group-append">
            <button
              className="btn btn-success btn-sm"
              onClick={handleSaveEdit}
            >
            <FontAwesomeIcon icon={faCheck} />
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={handleCancelEdit}
            >
             <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <label className="form-check-label">
              {task.text}
              {task.dueDate && (
                <span className="due-date badge badge-info ml-2">
                  Due: {task.dueDate}
                </span>
              )}
            </label>
          </div>
          <button
            className="btn btn-danger btn-sm float-right ml-2"
            onClick={() => deleteTask(index)}
          >
         <FontAwesomeIcon icon={faTrash} />
          </button>
          <button
            className="btn btn-primary btn-sm float-right"
            onClick={handleEditClick}
          >
            <FontAwesomeIcon icon={faPencil} />
          </button>
        </div>
      )}
    </li>
  );
}

export default Task;
