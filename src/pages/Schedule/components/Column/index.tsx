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
      <h1 className={s.title}>
        {title}
        <button
          onClick={() =>
            dispatch(addTaskCols({ id, newTask, tasks: list, index }))
          }
        >
          +
        </button>
      </h1>

      <div className={s.column}>
        {list.map(({ body, id, title }) => (
          <Task id={id} title={title} key={id} body={body} />
        ))}
      </div>
    </div>
  );
};

export default Column;
