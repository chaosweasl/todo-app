import { useState } from "react";

function ToDoList() {
    const[tasks, setTasks] = useState(["Shower", "Do homework", "Walk the dog"]);
    const[newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

    }

    function deleteTask(index) {

    }

    function moveTask(index) {

    }

    return (
        <div className="to-do-list">

            <h1>To-Do List</h1>
            

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="input-group">
                            <span 
                            className="input-group-text"
                            id="input-group-left-example"><i className="bi bi-card-checklist"></i></span> 
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a task..."
                            aria-label="Task"
                            aria-describedby="input-group-left"/>

                            <button
                            className="btn btn-outline-secondary"
                            id="input-group-button-right"
                            onClick={addTask}>
                                Add Task</button>
                        </div>

                    </div>
                </div>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button 
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button 
                        className="move-button"
                        onClick={() => moveTask(index)}>
                            ↑
                        </button>
                        <button 
                        className="move-button"
                        onClick={() => moveTask(index)}>
                            ↓
                        </button>
                    </li>
                )}
            </ol>

        </div>
    )
}

export default ToDoList