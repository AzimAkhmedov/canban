import React, { useEffect, useState } from "react";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
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
const Graph = ({ data }: graphProps) => {
  const [graphValue, setGraphValue] = useState<graphValue[]>([]);
  const sortData = () => {
    const store: graphValue[] = [];
    data.forEach((e) => {
      store.push({ x: e.date, y: e.activity });
    });
    setGraphValue(store);
  };
  useEffect(() => {
    sortData();
  }, []);
  useEffect(() => {
    console.log(graphValue);
  }, []);

  return (
    <div className={s.root}>
      <div className="container">
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
    </div>
  );
};

export default Graph;
