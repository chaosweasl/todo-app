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
            </div>

            <div>
                <input 
                    className="input-group"
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}/>

                <button
                    className="add-button"
                    onClick={addTask}>
                        Add
                </button>
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