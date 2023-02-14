import React from "react";
import { Tasks } from "../index";
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
      <h1>{title}</h1>
      <div className="">
        {data.map(({ body, id, no, status, title }) => (
          <Tasks
            id={id}
            no={no}
            status={status}
            title={title}
            key={id}
            body={body}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
