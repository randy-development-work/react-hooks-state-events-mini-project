import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((item, index) => (
        <Task key={item.id} name={item.text} category={item.category} />
      ))}
    </div>
  );
}

export default TaskList;
