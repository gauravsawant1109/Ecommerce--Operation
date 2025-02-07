import React, { useReducer, useState, useEffect } from "react";
import CartReducer from "../CartReducer/CartReducer";
const TaskManager = () => {
  const [tasks, dispatch] = useReducer(CartReducer, [], () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [taskText, setTaskText] = useState("");
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [taskText]);

  const addTask = () => {
    // if (taskText.trim() == "") return;   
    dispatch({ type: "ADD_TASK", payload: taskText });
    setTaskText("");
  };
  const toggleTask = (taskId) => {
    dispatch({ type: "TOGGLE_TASK", payload: taskId });
  };
  const deleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };
  return (
    <>
      <div>
        <h1>Task Manager</h1>
        <input
          placeholder="Enter a task "
          type="text"
          className="bg-white rounded text-black m-3"
          value={taskText}
          onChange={(e)=>setTaskText(e.target.value)}
        />
        <div>
          <button className="btn btn-outline-primary m-2 " onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>
      <div style={{display:tasks.length==0?"none":"inline"}} className="p-2">
             
        <ol  >
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{ textDecoration: task.completed ? "line-through" : "none" }}
            >
             <span className="fw-bold ms-2 me-2">{task.text}</span> 
              <button  style={{ display: task.completed ? "none" : "inline" }} onClick={() => toggleTask(task.id)}>Complete ✅</button>
              <button onClick={() => deleteTask(task.id)}>Delete ❌</button>
            </li>   
          ))}
        </ol>
      </div>
    </>
  );
};

export default TaskManager;
