import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Boards, Dashboard, TasksPage } from "../pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/boards" element={<Boards />} />
    </Routes>
  );
};

export default AppRouter;
