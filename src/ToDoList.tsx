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

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">To-Do List</h1>
            
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bi bi-card-checklist"/>
                        </span> 
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter a task..."/>

                        <button
                        className="btn btn-primary"
                        onClick={addTask}>
                            Add Task
                        </button>
                    </div>
                </div>
            </div>

            <ul className="list-group mt-4 col-14 col-md-10 col-lg-8 mx-auto">
                {tasks.map((task, index) => 
                /*I'm using label here because when selecting the checkbox, by clicking the whole thing it can
                get selected whereas using <li> doesn't and it's inconvenient*/

                    <label key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <input className="form-check-input me-2" type="checkbox"/>
                            <span className="flex-grow-1">{task}</span>
                        </div>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteTask(index)}>
                                <i className="bi bi-trash"></i>
                        </button>
                    </label>
                )}
            </ul>
        </div>
    )
}

export default ToDoList