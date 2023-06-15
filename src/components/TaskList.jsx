import React, { useState } from "react";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  // Add a new task
  const addTask = (e) => {
    e.preventDefault();
    const newTask = { title, description };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  // Remove a task
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // Edit a task
  const editTask = (index, newTitle, newDescription) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].title = newTitle;
    updatedTasks[index].description = newDescription;
    setTasks(updatedTasks);
    setEditIndex(-1); // Reset the edit index
  };

  return (
    <div className="">
      <form onSubmit={addTask} className="mb-4 sm:mb-10">
        <div className="flex flex-col sm:flex-row ">
          <div className="flex-grow mb-2 sm:mb-0 sm:mr-2">
            <input
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 w-full"
            />
          </div>
          <div className="flex-grow mb-2 sm:mb-0 sm:mr-2">
            <input
              type="text"
              placeholder="Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 w-full"
            />
          </div>
          <div className="flex justify-center sm:justify-start mt-4 sm:mt-0">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Add Task
            </button>
          </div>
        </div>
      </form>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onDelete={() => removeTask(index)}
            onEdit={() => setEditIndex(index)}
            isEditing={index === editIndex}
            onUpdate={(newTitle, newDescription) =>
              editTask(index, newTitle, newDescription)
            }
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
