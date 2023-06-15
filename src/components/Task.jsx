import React, { useState } from "react";
import PropTypes from "prop-types";

const Task = ({ task, onDelete, onEdit, isEditing, onUpdate }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate(title, description);
  };

  const renderedTitle = title || "No title"; // Set default value if title is empty

  return (
    <div className="bg-white bg-opacity-20 shadow-lg rounded-md p-4 mb-4 text-white relative">
      {isEditing ? (
        <form onSubmit={handleUpdate} className="mb-2 sm:mb-4">
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="p-2 mb-2 mr-2" // Add margin-right here
          />
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            className="p-2 mb-2 mr-2" // Add margin-right here
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mr-2"
          >
            Update
          </button>
        </form>
      ) : (
        <div className="flex flex-col sm:flex-row items-center">
          <div>
            <h2 className="text-xl font-semibold">{renderedTitle}</h2>
            <p className="text-gray-400 w-80">{task.description}</p>
          </div>
          <div className="flex px-5 absolute right-0">
            <button
              onClick={onEdit}
              className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Task;
