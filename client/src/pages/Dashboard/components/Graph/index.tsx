import React from "react";
import { VictoryBar } from "victory";
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
  return <div>{<VictoryBar data={store} y={"activity"} x={"date"} />}</div>;
};

export default Graph;
