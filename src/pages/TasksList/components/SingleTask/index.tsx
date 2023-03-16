import React from "react";
import { toast } from "react-toastify";
import { deletingTask } from "../../../../app/store/tasks";
import { useAppDispatch, useAppSelector } from "../../../../shared/hooks";
import s from "./index.module.scss";
interface ISingleTask {
  id: number;
  body: string;
  title: string;
  date: string;
  i: number;
}
const SingleTask = ({ body, date, id, title, i }: ISingleTask) => {
  const list = useAppSelector((state) => state.tasks.data);
  const dispatch = useAppDispatch();
  const removeHandler = () => {
    dispatch(deletingTask({ id, list: list.filter((el) => el.id != id) }))
      .catch(() => {
        toast("Sorry, some error has been detected while  deleting 🦄!");
      })
      .finally(() => {
        toast("Successfully deleted 🦄!");
      });
  };
  return (
    <div className={s.root}>
      <div className={s.item}>
        {i}
        {". " + title}
      </div>
      <div className={s.item}>{body}</div>
      <div className={s.item}>{date}</div>
      <div className={s.action}>
        <button>Edit</button> <button onClick={removeHandler}>Delete</button>
      </div>
    </div>
  );
};

export default SingleTask;
