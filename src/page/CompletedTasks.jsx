import React from "react";

const CompletedTasks = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="container">
      <div className="tasks">
      <h1>Completed Tasks</h1>
      <ul>
        {completedTasks.length > 0 ? (
          completedTasks.map((task) => (
            <li key={task.id}>
              <span style={{ textDecoration: "line-through red 3px" }}>
                {task.text}
              </span>
            </li>
          ))
        ) : (
          <p>No completed tasks.</p>
        )}
      </ul>
    </div>
    </div>
  );
};

export default CompletedTasks;
