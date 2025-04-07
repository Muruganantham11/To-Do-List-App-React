import React, { useState } from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import Content from "./Content";
import EditTask from "./EditTask";

const ToDoApp = () => {
  const [displayValue, setDisplayValue] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    setDisplayValue(1);

    e.preventDefault();
    if (!newTask) return;
    addTask(newTask);
    setNewTask("");
  };

  const addTask = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const addTewTask = { id, checked: false, isEditing: false, task };
    const TaskList = [...tasks, addTewTask];
    setTasks(TaskList);
  };

  const handleCheck = (id) => {
    const listItems = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(listItems);
    console.log(id);
  };

  const handleDelete = (id) => {
    const listsItems = tasks.filter((task) => task.id !== id);
    setTasks(listsItems);
  };

  const handleEdit = (id) => {
    const listItems = tasks.map((task) =>
      task.id === id ? { ...task, isEditing: !task.isEditing } : task
    );
    setTasks(listItems);
    console.log(listItems);
  };

  const handleEditTask = (editValue, id) => {
    const listItems = tasks.map((task) =>
      task.id === id
        ? { ...task, task: editValue, isEditing: !task.isEditing }
        : task
    );
    setTasks(listItems);
  };

  return (
    <div className="bg-gray-300 w-130 min-h-100 rounded-2xl  text-center mx-auto mt-7 p-4 ">
      <Header title="Get Things Done" />
      <AddTask
        handleSubmit={handleSubmit}
        newTask={newTask}
        setNewTask={setNewTask}
      />

      {displayValue === 0 ? (
        <p className="mt-12 text-xl tracking-wide">
          Enter The Task's For The Day!
        </p>
      ) : null}

      {tasks.map((task) =>
        task.isEditing === true && task.checked === false ? (
          <EditTask task={task} key={task.id} handleEditTask={handleEditTask} />
        ) : (
          <Content
            task={task}
            key={task.id}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        )
      )}
    </div>
  );
};

export default ToDoApp;
