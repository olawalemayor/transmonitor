import React from "react";
import ChartComponent from "./chart";

export default function ChartWidget({ title, value }: any) {
  return (
    <div className="flex bg-white shadow-sm p-[19px] items-center lg:mr-1">
      <div className="pr-4">
        <span className="block capitalize text-xs">{title}</span>
        <span className="block text-lg">{value}</span>
      </div>

      <div className="w-full h-full">
        <ChartComponent />
      </div>
    </div>
  );
}
