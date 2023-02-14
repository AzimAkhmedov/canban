import React from "react";
interface ColumnProps {
  id: number;
  title: string;
  data: any[];
}
const Column = ({ data, id, title }: ColumnProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="">
        {data.map((e) => {
          <p>test</p>;
        })}
      </div>
    </div>
  );
};

export default Column;
