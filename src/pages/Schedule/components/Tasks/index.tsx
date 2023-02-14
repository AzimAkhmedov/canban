import React from "react";
import s from "./index.module.scss";
interface TaskProps {
  id: number;
  no: number;
  title: string;
  body: string;
  status: boolean;
}
const Task = ({ body, id, status, title, no }: TaskProps) => {
  console.log(body);
  console.log("йцукае");

  return (
    <div className={s.card}>
      <h2>{title}</h2>
      <div className={s.content}>
        <p>{body}</p>
        <div className={s.actions}>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </div>
      <sub>{no}</sub>
    </div>
  );
};

export default Task;
