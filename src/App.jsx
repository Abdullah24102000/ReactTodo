import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/home";
import CompletedTasks from "./page/CompletedTasks";
import UncompletedTasks from "./page/UncompletedTasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tasks={tasks}
              addTask={addTask}
              deleteTask={deleteTask}
              toggleCompletion={toggleCompletion}
            />
          }
        />
        <Route path="/completed" element={<CompletedTasks tasks={tasks} />} />
        <Route path="/uncompleted" element={<UncompletedTasks tasks={tasks} />} />
      </Routes>
    </Router>
  );
};

export default App;
