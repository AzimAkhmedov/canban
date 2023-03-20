import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tasks } from "../../app/store/tasks/types";
import { getSingleTask } from "../../features/";
import s from "./index.module.scss";
const CurrentTask = () => {
  const params = useParams();
  const [current, setCurrent] = useState<Tasks>();
  useEffect(() => {
    getSingleTask(Number(params.id)).then((data) => {
      setCurrent(data);
    });
  }, []);
  useEffect(() => {
    console.log(current);
  }, [current]);
  return (
    <div className={"container " + s.root}>
      <h2>Task: {current?.title}</h2>
    </div>
  );
};

export default CurrentTask;
