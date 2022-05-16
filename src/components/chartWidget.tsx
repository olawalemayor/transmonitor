import React from "react";
import ChartComponent from "./chart";

export default function ChartWidget({ title, value }: any) {
  return (
    <div className="flex bg-white shadow-sm p-[19px] items-center mr-4">
      <div className="pr-4">
        <span className="block capitalize text-xs">{title}</span>
        <span className="block text-lg">{value}</span>
      </div>

      <div className="">
        <ChartComponent />
      </div>
    </div>
  );
}
