import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {

  const [newTaskObj, setNewTaskObj] = useState({
    text: "",
    category: "Code",
  })

  function handleAdd(event) {
    let name = event.target.name;
    let value = event.target.value;

    setNewTaskObj({
      ...newTaskObj,
      [name]: value,
    })
  }
  return (
    <form className="new-task-form"
      onSubmit={(event) => {
        event.preventDefault()
        onTaskFormSubmit(newTaskObj)
        }}>
      <label>
        Details
        <input type="text" name="text" value={newTaskObj.text} onChange={handleAdd} />
      </label>
      <label>
        Category
        
        <select name="category" value={newTaskObj.category} onChange={handleAdd} >
          {/* render <option> elements for each category here */}
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
