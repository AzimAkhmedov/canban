import React from "react";
import Task from "../Tasks";
import s from "./index.module.scss";
interface taskProps {
  id: number;
  no: number;
  title: string;
  body: string;
  status: boolean;
}
interface ColumnProps {
  id: number;
  title: string;
  data: taskProps[];
}

const Column = ({ data, id, title }: ColumnProps) => {
  console.log(data);
  
  return (
    <div className={s.root}>
      <h2>{title}</h2>
      <div className="">
        {data.map(({ body, id, no, status, title }) => {
          <Task
            id={id}
            no={no}
            status={status}
            title={title}
            key={id}
            body={body}
          />;
        })}
      </div>
    </div>
  );
};

export default Column;
