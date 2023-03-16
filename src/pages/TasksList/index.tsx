import { useEffect } from "react";
import { fetchingTasks } from "../../app/store/tasks";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { AddTask, TaskListError, SingleTask } from "./components";
import { Loader } from "../../shared/ui";
const TaskList = () => {
  const { data, loading, error } = useAppSelector((state) => state.tasks);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchingTasks());
  }, []);

  return loading == "Loading" ? (
    <Loader />
  ) : error != undefined ? (
    <TaskListError message={error} />
  ) : (
    <div className="container">
      <div className="actions">
        <AddTask />
      </div>
      <div>
        {data.map((e, i) => (
          <SingleTask
            body={e.body}
            date={e.date}
            id={e.id}
            title={e.title}
            key={e.id}
            i={i + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
