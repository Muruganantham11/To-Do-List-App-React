import React from "react";
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";

const Content = ({ task, handleCheck, handleDelete, handleEdit }) => {
  return (
    <div className=" mt-7 bg-slate-500 p-3 rounded-xl mb-7 relative">
      <ul>
        <li className="flex items-center" key={task.id}>
          <input
            className="cursor-pointer w-25 h-6  -ml-6 items-center "
            type="checkbox"
            checked={task.checked}
            onChange={() => handleCheck(task.id)}
          />

          <label
            htmlFor=""
            style={task.checked ? { textDecoration: "line-through" } : task}
            onClick={() => handleCheck(task.id)}
            className=" text-xl  -ml-6 mr-10 "
          >
            {task.task}
          </label>

          <FaPenToSquare
            className=" cursor-pointer w-24 h-6  outline-none absolute right-10
            hover:fill-blue-400 "
            role="buttton"
            tabIndex="0"
            onClick={() => handleEdit(task.id)}
          />
          <FaTrashCan
            className=" cursor-pointer w-24 h-6 outline-none absolute -right-5 hover:fill-red-500"
            role="buttton"
            tabIndex="1"
            onClick={() => handleDelete(task.id)}
          />
        </li>
      </ul>
    </div>
  );
};

export default Content;
