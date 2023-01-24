import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { HomePage, TasksPage } from "../pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TasksPage />} />
    </Routes>
  );
};

export default AppRouter;
