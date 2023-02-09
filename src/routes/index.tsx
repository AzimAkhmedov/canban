import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Schedule, Dashboard } from "../pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  );
};

export default AppRouter;
