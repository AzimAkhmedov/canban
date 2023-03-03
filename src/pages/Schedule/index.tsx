import React, { useEffect, useState } from "react";
import { getCols } from "../../api";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchColums } from "../../app/store/reducers";
import { Loader } from "../../components";
import { Column } from "./components";
import { ColumnProps } from "./components/types";
import s from "./index.module.scss";

const Schedule = () => {
  const dispatch = useAppDispatch();
  const { cols, status, errorMessage } = useAppSelector(
    (state) => state.columnReducer
  );

  useEffect(() => {
    dispatch(fetchColums());
  }, []);
  useEffect(() => {
    console.log(cols, status);
  }, [status]);
  return status == "Loaded" ? (
    <div className={s.root}>
      {cols.map(({ list, id, title }, i) => (
        <Column index={i} list={list} id={id} title={title} key={id} />
      ))}
    </div>
  ) : errorMessage == "" ? (
    <Loader />
  ) : (
    <div className={s.error}>Error: {errorMessage}</div>
  );
};

export default Schedule;
