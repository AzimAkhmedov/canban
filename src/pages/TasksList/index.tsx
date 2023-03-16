import React, { useEffect } from "react";
import { fetchingTasks } from "../../app/store/tasks";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import Loader from "../../shared/ui/Loader";
import AddTask from "./components/AddTask";
import SingleTask from "./components/SingleTask";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
