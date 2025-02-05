import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(["Shower", "Do homework", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");
    const [draggedTaskIndex, setDraggedTaskIndex] = useState<number | null>(null);

    /*event is an event object that comes from an event (like typing
    in an input box, which happens to be the case, occurs)
    
    target is an HTML element that triggered the event (the input box)
    
    value is just the text inside*/
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
        /*this adds the new task to be the value inside the
        input box after pressing the add button*/ 
    }
    function addTask() {
        /*...t creates a new array because JSX doesn't allow to modify already existing arrays
        so it's necessary to make a new one with the changes added to it
        kinda weird ikr*/
        if (newTask.trim() !== "") {
            /*trim() is a js function that removes white spaces in a string,
            basically only leaves actual text to be modified
            */
            setTasks(t => [newTask, ...t]);
            setNewTask("");
        }
    }

    function deleteTask(index: number) {
        /*filter() gets all the tasks that respect the condition,
        in this case everything except the one with the index that
        we're trying to delete, it basically updates the array
        by creating a new one*/
        const updatedTasks = tasks.filter((_, i) => i != index);
        setTasks(updatedTasks);
    }

    function handleDragStart(index: number) {
        setDraggedTaskIndex(index);
    }

    function handleDragOver(event: React.DragEvent<HTMLLabelElement>) {
        event.preventDefault(); // Allows dropping
    }

    function handleDrop(targetIndex: number) {
        if (draggedTaskIndex === null || draggedTaskIndex === targetIndex) return;

        const updatedTasks = [...tasks];
        const [movedTask] = updatedTasks.splice(draggedTaskIndex, 1);
        updatedTasks.splice(targetIndex, 0, movedTask);

        setTasks(updatedTasks);
        setDraggedTaskIndex(null);
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
                        placeholder="Enter a task..."
                        value={newTask}
                        onChange={handleInputChange}
                        maxLength={90}/>

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

                    <label 
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={handleDragOver}
                        onDrop={() => handleDrop(index)}
                    >
                        <div>
                            <input className="form-check-input me-2" type="checkbox"/>
                            <span className="flex-grow-1">{task}</span>
                        </div>
                        <button
                            className="btn btn-danger btn-sm"
                            //() => is necessary because otherwise it just triggers the event automatically
                            //why? who knows man
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