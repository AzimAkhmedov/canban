import { createBrowserRouter } from "react-router-dom";
import CurrentTask from "./CurrentTask";
import TaskList from "./TasksList";
import Home from "./HomePage";
import { Loader } from "../shared/ui";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
  {
    path: "/tasks",
    element: <TaskList />,
  },
  {
    path: "/:id",
    element: <CurrentTask />,
  },
]);
