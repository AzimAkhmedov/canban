import React, { useEffect, useState } from "react";
import { VictoryBar, VictoryChart, VictoryLine, VictoryTheme } from "victory";
import s from "./index.module.scss";
interface graphPropsEl {
  activity: number;
  date: number;
}
interface graphProps {
  data: graphPropsEl[];
}
interface graphValue {
  x: number;
  y: number;
}
// const store = [
//   {
//     x: 12,
//     y: 23,
//   },
//   {
//     x: 1,
//     y: 23,
//   },
//   {
//     activity: 1,
//     date: 23,
//   },
// ];

const Graph = ({ data }: graphProps) => {
  const [graphValue, setGraphValue] = useState<graphValue[]>([]);
  const sortData = () => {
    const store: graphValue[] = [];
    data.forEach((e) => {
      store.push({ x: e.date, y: e.activity });
    });
    // return store;
    setGraphValue(store);
  };
  useEffect(() => {
    sortData();
  }, []);
  useEffect(() => {
    // sortData();
    console.log(graphValue);
    
  }, []);
  

  return (
    <div className={s.root}>
      <VictoryChart theme={VictoryTheme.material} title="Your Activity">
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" },
          }}
          data={graphValue}
        />
      </VictoryChart>
    </div>
  );
};

export default Graph;
