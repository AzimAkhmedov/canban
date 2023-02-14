import React from "react";
import { Column } from "./components";
import s from "./index.module.scss";
// id: number;
// no: number;
// title: string;
// body: string;
// status: boolean;
interface taskProps {
  id: number;
  no: number;
  title: string;
  body: string;
  status: boolean;
}
interface ColumnProps {
  id: number;
  title: string;
  data: taskProps[];
}
const stat: ColumnProps[] = [
  {
    id: 1,
    title: "To-do",
    data: [
      {
        body: "Make responseble table",
        id: 1,
        no: 1,
        status: false,
        title: "Create Table",
      },
      {
        body: "Make responseble table",
        id: 2,
        no: 2,
        status: false,
        title: "Create Table",
      },
    ],
  },
  {
    id: 2,
    title: "In Progress",
    data: [
      {
        body: "Make responseble table",
        id: 1,
        no: 1,
        status: false,
        title: "Create Table",
      },
      {
        body: "Make responseble table",
        id: 2,
        no: 2,
        status: false,
        title: "Create Table",
      },
    ],
  },
];

const Schedule = () => {
  // console.log(stat);

  return (
    <div className={s.root}>
      {stat.map(({ data, id, title }) => (
        <Column data={data} id={id} title={title} key={id} />
      ))}
    </div>
  );
};

export default Schedule;

//  [{id:1, title: string, tasks: [],}]
