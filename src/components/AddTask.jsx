import React, { useRef } from "react";

const AddTask = ({ newTask, setNewTask, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="addItem" className="absolute -left-200">
        add task
      </label>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        className="outline-none bg-none border-2 p-1.5 w-80 mx-2 rounded-sm"
        id="addItem"
        required
        placeholder="Add Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        className="bg-blue-700 p-2 text-white rounded-sm
         hover:bg-blue-900"
        onClick={() => inputRef.current.focus()}
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
