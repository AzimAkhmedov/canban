import React from "react";
import { useAppSelector } from "../../shared/hooks";

const TaskList = () => {
  const { data, loading } = useAppSelector((state) => state.tasks);
  return loading == "Loading" ? (
    <p>Loading</p>
  ) : (
    <div>
      <div className="container"></div>
    </div>
  );
};

export default TaskList;
