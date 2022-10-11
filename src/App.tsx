import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./pages/todoList/TodoList";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
