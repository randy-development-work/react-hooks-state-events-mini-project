import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((item, index) => (
        <Task key={index} text={item.text} category={item.category} handleDelete={handleDelete}/>
      ))}
    </div>
  );
}

export default TaskList;
