import { useState } from "react";
function TodoList() {
  const [tasks, setTasks] = useState([
    "Wake up",
    "Shower",
    "Go Jogging",
    "Meditate",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== id));
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];

      setTasks(updatedTasks);
    }
  };
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] =
          [updatedTasks[index + 1], updatedTasks[index]];
  
        setTasks(updatedTasks);
      }
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li className="list-item" key={index}>
            <span className="text">{task}</span>{" "}
            <button className="delete-button" onClick={() => removeTask(index)}>
              x
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
