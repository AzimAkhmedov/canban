import React from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { addTaskCols } from "../../../../app/store/reducers";
import { Tasks } from "../../../../app/types";
import { Task } from "../index";
import { ColumnProps } from "../types";
import s from "./index.module.scss";

const Column = ({ list, id, title, index }: ColumnProps) => {
  const dispatch = useAppDispatch();
  const newTask: Tasks = {
    body: "TEEEST",
    id: 10,
    title: "qwerwerqr",
  };
  return (
    <div className={s.root}>
      <div className={s.title}>
        <h1>{title}</h1>
        <button
          onClick={() =>
            dispatch(addTaskCols({ id, newTask, tasks: list, index }))
          }
        >
          +
        </button>
      </div>
      <div className="">
        {list.map(({ body, id, title }) => (
          <Task id={id} title={title} key={id} body={body} />
        ))}
      </div>
    </div>
  );
};

export default Column;
