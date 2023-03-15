import React from "react";
import s from "./index.module.scss";
interface ISingleTask {
  id: number;
  body: string;
  title: string;
  date: string;
}
const SingleTask = ({ body, date, id, title }: ISingleTask) => {
  return (
    <div className={s.root}>
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>
      <p>{date}</p>
    </div>
  );
};

export default SingleTask;
