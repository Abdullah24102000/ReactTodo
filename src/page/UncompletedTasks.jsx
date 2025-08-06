import React from "react";

const UncompletedTasks = ({ tasks }) => {
    const uncompletedTasks = tasks.filter((task) => !task.completed);

    return (
        <div className="container">
            <div className="tasks">
            <h1>Uncompleted Tasks</h1>
            <ul>
                {uncompletedTasks.length > 0 ? (
                    uncompletedTasks.map((task) => (
                        <li key={task.id}>
                            <span>{task.text}</span>
                        </li>
                    ))
                ) : (
                    <p>No uncompleted tasks!</p>
                )}
            </ul>
        </div>
        </div>
    );
};

export default UncompletedTasks;
