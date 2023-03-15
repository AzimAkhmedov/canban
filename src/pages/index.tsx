import { createBrowserRouter } from "react-router-dom";
import CurrentTask from "./CurrentTask";
import TaskList from "./TasksList";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <TaskList />,
  },
  {
    path: "/:id",
    element: <CurrentTask />,
  },
]);
