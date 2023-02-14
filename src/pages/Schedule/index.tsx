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
    title: "Todo",
    data: [
      {
        id: 1,
        no: 1,
        title: "Make out table",
        body: "Create cool designed tool",
        status: true,
      },
      {
        id: 2,
        no: 2,
        title: "Make out table",
        body: "Create cool designed tool",
        status: true,
      },
      {
        id: 3,
        no: 3,
        title: "Make out table",
        body: "Create cool designed tool",
        status: true,
      },
    ],
  },
  {
    id: 2,
    title: "In Progress",
    data: [
      {
        id: 1,
        no: 1,
        title: "Make out table",
        body: "Create cool designed tool",
        status: true,
      },
      {
        id: 2,
        no: 2,
        title: "Make out table",
        body: "Create cool designed tool",
        status: true,
      },
      {
        id: 3,
        no: 3,
        title: "Make out table",
        body: "Create cool designed tool",
        status: true,
      },
    ],
  },
];

const Schedule = () => {
  // console.log(stat);
  
  return (
    <div className={s.root}>
      {stat.map(({ data, id, title }) => {
        console.log(data);
        
        <Column data={data} id={id} title={title} key={id} />;
      })}
      {/* <Column data={data.data} id={data.id} title={data.title} key={data.id} /> */}
    </div>
  );
};

export default Schedule;

//  [{id:1, title: string, tasks: [],}]
