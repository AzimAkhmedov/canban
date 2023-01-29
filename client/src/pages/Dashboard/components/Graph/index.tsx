import React from "react";
import { VictoryBar, VictoryChart } from "victory";
import s from "./index.module.scss";
interface graphPropsEl {
  activity: number;
  date: number;
}
interface graphProps {
  data: graphPropsEl[];
}

const store = [
  {
    activity: 12,
    date: 23,
  },
  {
    activity: 1,
    date: 23,
  },
  {
    activity: 1,
    date: 23,
  },
];

const Graph = ({ data }: graphProps) => {
  return (
    <div className={s.root}>
      <VictoryChart title="Your Activity">
        <VictoryBar data={store} y={"activity"} x={"date"} />
      </VictoryChart>
    </div>
  );
};

export default Graph;
