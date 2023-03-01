import React, { useEffect, useState } from "react";
import { getCols } from "../../api";
import { Column } from "./components";
import { ColumnProps } from "./components/types";
import s from "./index.module.scss";
// id: number;
// no: number;
// title: string;
// body: string;
// status: boolean;

// const stat: ColumnProps[] = [
//   {
//     id: 1,
//     title: "To-do",
//     data: [
//       {
//         body: "Make responseble table",
//         id: 1,
//         title: "Create Table",
//       },
//       {
//         body: "Make responseble table",
//         id: 2,
//         title: "Create Table",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "In Progress",
//     data: [
//       {
//         body: "Make responseble table",
//         id: 1,

//         title: "Create Table",
//       },
//       {
//         body: "Make responseble table",
//         id: 2,
//         title: "Create Table",
//       },
//     ],
//   },
// ];

const Schedule = () => {
  const [stat, setStat] = useState<ColumnProps[]>([]);

  // const useState
  useEffect(() => {
    getCols().then((data) => {
      console.log("Data: ", data);
      setStat(data);
    });
  }, []);

  // useEffect(() => {
  //   console.log(stat);
  // }, [stat]);
  return (
    <div className={s.root}>
      {stat.map(({ list, id, title }) => (
        <Column list={list} id={id} title={title} key={id} />
      ))}
    </div>
  );
};

export default Schedule;
