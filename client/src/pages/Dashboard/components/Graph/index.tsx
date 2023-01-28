import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
} from "recharts";
interface graphPropsEl {
  activity: number;
  date: number;
}
interface graphProps {
  data: graphPropsEl[];
}

const Graph = ({ data }: graphProps) => {
  const displayGraph = () => {
    return (
      <LineChart
        width={window.innerWidth / 1.25}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="basis" dataKey="temperature" stroke="#82ca9d" />
      </LineChart>
    );
  };
  return <div>{}</div>;
};

export default Graph;
