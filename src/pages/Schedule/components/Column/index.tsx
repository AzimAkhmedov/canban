import React from "react";
import { Tasks } from "../index";
import { ColumnProps, TaskProps } from "../types";
import s from "./index.module.scss";

const Column = ({ list, id, title }: ColumnProps) => {
  console.log(list);

  return (
    <div className={s.root}>
      <h1>{title}</h1>
      <div className="">
        {list.map(({ body, id, title }) => (
          <Tasks id={id} title={title} key={id} body={body} />
        ))}
      </div>
    </div>
  );
};

export default Column;
