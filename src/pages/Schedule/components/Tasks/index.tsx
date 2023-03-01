import React from "react";
import { TaskProps } from "../types";
import s from "./index.module.scss";

const Task = ({ body, id, title }: TaskProps) => {
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
    </div>
  );
};

export default Task;
