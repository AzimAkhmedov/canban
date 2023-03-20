import { useState } from "react";
import { NavLink } from "react-router-dom";
import { deletingTask } from "../../../../app/store/tasks";
import { useAppDispatch, useAppSelector } from "../../../../shared/hooks";
import { Task } from "../../../../shared/models";
import s from "./index.module.scss";
interface ISingleTask {
  id: number;
  body: string;
  title: string;
  date: string;
  i: number;
}
const SingleTask = ({ body, date, id, title, i }: ISingleTask) => {
  const [editable, setEditable] = useState(false);
  const [newTask, setNewTask] = useState<Task>({
    date,
    id,
    title,
    body,
    deadline: date,
  });
  const list = useAppSelector((state) => state.tasks.data);
  const dispatch = useAppDispatch();
  const removeHandler = () => {
    dispatch(deletingTask({ id, list: list.filter((el) => el.id != id) }));
  };

  return (
    <div
      className={s.root}
      onDrag={(e) => {
        console.log(e.clientX);
      }}
    >
      <div className={s.item}>
        <NavLink to={"/" + id}>
          {i}
          {". " + title}
        </NavLink>
      </div>
      <div className={s.item}>{body}</div>
      <div className={s.item}> Until: {date}</div>
      <div className={s.action}>
        {editable ? (
          <>
            <button onClick={removeHandler}>Delete</button>
          </>
        ) : (
          <>
            <button onClick={() => setEditable(!editable)}>Edit</button>{" "}
            <button onClick={removeHandler}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleTask;
