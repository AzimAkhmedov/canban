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
      <div>
        {id}
        {". " + title}
      </div>
      <div>{body}</div>
      <div>{date}</div>
    </div>
  );
};

export default SingleTask;
