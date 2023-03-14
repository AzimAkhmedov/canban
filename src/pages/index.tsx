import { createBrowserRouter } from "react-router-dom";
import TaskList from "./TasksList";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <TaskList />,
  },
]);
