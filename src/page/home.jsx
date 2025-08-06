import React, { useState } from "react";

const Home = ({ tasks, addTask, deleteTask, toggleCompletion }) => {
    const [newTask, setNewTask] = useState("");
    const handleAddTask = () => {
        if (newTask.trim()) {
            addTask({
                id: Date.now(),
                text: newTask,
                completed: false,
            });
            setNewTask("");
        }
    };

    return (
        <div className="container">
            <div className="tasks">
                <h1>Manage Tasks</h1>
                <input
                    className="inputTask"
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add New Task"
                />
                <button className="addBtn" onClick={handleAddTask}>Add</button>

                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <span
                                style={{
                                    textDecoration: task.completed
                                        ? "line-through red 3px"
                                        : ""
                                }}
                            >
                                {task.text}
                            </span>
                            <button
                                className="compbtn"
                                onClick={() => toggleCompletion(task.id)}
                            >
                                {task.completed ? "Uncomp" : "Complete"}
                            </button>
                            <button className="delbtn" onClick={() => deleteTask(task.id)}>Del</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
