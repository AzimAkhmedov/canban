import React from "react";
import { Graph } from "./components";
const data = [
  {
    activity: 1,
    date: 23,
  },
  {
    activity: 2,
    date: 244,
  },
];
const Dashboard = () => {
  return (
    <div>

      
      <Graph data={data} />
    </div>
  );
};

export default Dashboard;
