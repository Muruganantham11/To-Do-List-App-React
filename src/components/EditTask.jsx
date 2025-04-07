import React, { useState } from "react";

const EditTask = ({ task, handleEditTask }) => {
  const [editValue, setEditValue] = useState(task.task);

  const handleEditSubmit = (e) => {
    e.preventDefault();
     handleEditTask(editValue, task.id); 
  /*   console.log(editValue)
    console.log(task.id) */
  };

  return (
    <form action="" onSubmit={handleEditSubmit}>
      <input
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        placeholder="Edit Task"
         className="outline-none bg-none border-2 p-1.5 w-80 mx-2 rounded-sm mt-3"
      />
      <button className="bg-green-700 p-2 text-white rounded-sm hover:bg-green-900">Edit Task </button>
    </form>
  );
};

export default EditTask;
