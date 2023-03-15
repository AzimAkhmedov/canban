import React from "react";

interface ISingleTask {
  id: number;
  body: string;
  title: string;
  date: string;
}
const SingleTask = ({ body, date, id, title }: ISingleTask) => {
  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>
      <p>{date}</p>
    </div>
  );
};

export default SingleTask;
