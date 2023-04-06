import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { deletingTask, editingTask } from "../../../../app/store/tasks";
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

  const editHandler = () => {
    list.forEach((e) => {
      if (e.id === id) {
        e = newTask;
      }
    });
    try {
      dispatch(editingTask({ id, val: newTask, list }));
      setEditable(false);
    } catch (error) {
      toast("Something went wrong", { type: "error" });
      return;
    }
    toast("Successfully edited", { type: "success" });
  };
  return (
    <div
      className={s.root}
      onDrag={(e) => {
        console.log(e.clientX);
      }}
    >
      {editable ? (
        <>
          <input
            className={s.item}
            value={newTask.title}
            onChange={(e) => {
              setNewTask({ ...newTask, title: e.target.value });
            }}
          />

          <input
            className={s.item}
            value={newTask.body}
            onChange={(e) => {
              setNewTask({ ...newTask, body: e.target.value });
            }}
          />
          <input
            type={"datetime-local"}
            className={s.item}
            onChange={(e) => {
              setNewTask({ ...newTask, deadline: e.target.value });
            }}
            value={newTask.date}
        
          />

        </>
      ) : (
        <>
          <NavLink to={"/" + id}>
            <div className={s.item}>{i + ". " + title}</div>
          </NavLink>
          <div className={s.item}>{body}</div>
          <div className={s.item}> Until: {date}</div>
        </>
      )}
      <div className={s.action}>
        {editable ? (
          <>
            <button onClick={editHandler}>Confirm</button>{" "}
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
