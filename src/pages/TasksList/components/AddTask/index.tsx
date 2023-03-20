import React, { useState } from "react";
import { toast } from "react-toastify";
import { addingTask } from "../../../../app/store/tasks";
import { useAppDispatch } from "../../../../shared/hooks";

import s from "./index.module.scss";
interface ChangeProps {
  title: string;
  body: string;
}
const AddTask = () => {
  const [addingState, setAddingState] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [newTask, setNewTask] = useState({
    title: "",
    body: "",
  });
  const handleChange = (newVal: ChangeProps) => {
    console.log(newVal, newTask);
    setNewTask(newVal);
  };
  const dateGeneric: () => string = () => {
    let date = new Date().toLocaleString("en-En", {
      day: "numeric",
      month: "long",
      weekday: "long",
    });

    return date;
  };
  const handleAdding = () => {
    if (newTask.body == "" || newTask.title == "") {
      toast("Enter body and title before creating task🦄 !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "error",
      });
    } else if (newTask.title.length > 250) {
      toast("Too large title 🦄!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "error",
      });
    } else if (newTask.body.length > 500) {
      toast("I know its annoying, but to large body 🦄!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "error",
      });
    } else if (newTask.body.length < 6 || newTask.title.length < 4) {
      toast("Too short.... 🦄!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "error",
      });
    } else {
      dispatch(
        addingTask({
          date: dateGeneric(),
          body: newTask.body,
          title: newTask.title,
          id: Date.now(),
          deadline: "qwewertyu",
        })
      ).finally(() => {
        toast("Succesfully added!", { type: "success" });
      });
    }
  };
  return (
    <div className={s.root}>
      <h3 onClick={() => setAddingState(!addingState)}>
        Create and add new task <span>{addingState ? "-" : "+"}</span>{" "}
      </h3>
      {addingState ? (
        <div className={s.inputs}>
          <input
            value={newTask.title}
            placeholder="Write your tasks title"
            type="text"
            onChange={(e) => {
              handleChange({ ...newTask, title: e.target.value });
            }}
          />

          <input
            type="text"
            value={newTask.body}
            placeholder="Write your task or describe it"
            onChange={(e) => {
              handleChange({ ...newTask, body: e.target.value });
            }}
          />
          <div className={s.action}>
            <button
              onClick={() => {
                handleAdding();
              }}
            >
              {" "}
              Create Task{" "}
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AddTask;
