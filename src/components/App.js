import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDelete(text) {
    const newtaskList = tasks.filter((task) => task.text !== text);
    setTasks(newtaskList);
  }

  const tasksDisplayed = tasks.filter((task) => {
    if(selectedCategory === "All") return true;

    else return task.category === selectedCategory;

})

function onTaskFormSubmit(newTask) {
  const newTaskData = [...tasks, newTask]
  setTasks(newTaskData);
}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={categories}/>
      <TaskList tasks={tasksDisplayed} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
