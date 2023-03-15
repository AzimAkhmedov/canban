import React, { useEffect } from "react";
import { fetchingTasks } from "../../app/store/tasks";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import Loader from "../../shared/ui/Loader";
import SingleTask from "./components/SingleTask";

const TaskList = () => {
  const { data, loading, error } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchingTasks());
  }, []);
  useEffect(() => {
    console.log(data, loading, error);
  }, [data]);
  return loading == "Loading" ? (
    <Loader />
  ) : error != undefined ? (
    <p>{error}</p>
  ) : (
    <div className="container">
      <div>
        {data.map((e) => (
          <SingleTask
            body={e.body}
            date={e.date}
            id={e.id}
            title={e.title}
            key={e.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
