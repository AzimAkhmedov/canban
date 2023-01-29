import React from "react";
import { Graph } from "./components";
const data = [
  {
    activity: 1,
    date: 23,
  },
  {
    activity: 1,
    date: 23,
  },
];
const Dashboard = () => {
  
  return (
    <div style={{ color: "white" }}>
    
      <Graph data={data} />
    </div>
  );
};

export default Dashboard;
