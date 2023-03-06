import React, { useState } from "react";
import { TaskProps } from "../types";
import s from "./index.module.scss";

const Task = ({ body, id, title }: TaskProps) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState<TaskProps>({
    body,
    id,
    title,
  });
  const handleEdit = () => {
    if (isEditable) {
    }
  };
  return (
    <div
      className={s.card}
      onDrag={() => {
        console.log("test");
      }}
    >
      <div className={s.content}>
        {isEditable ? (
          <input
            value={inputVal.title}
            onChange={(e) =>
              setInputVal({ ...inputVal, title: e.target.value })
            }
          />
        ) : (
          <h3>{inputVal.title}</h3>
        )}
        <p>{body}</p>
      </div>

      <div className={s.actions}>
        <button>Delete</button>
        <button onClick={() => setIsEditable(!isEditable)}>
          {isEditable ? "Confirm" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default Task;
