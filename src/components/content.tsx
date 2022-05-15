import React from "react";
import ChartWidget from "./chartWidget";
import OrderWidget from "./orderWidget";

export default function Content() {
  return (
    <div>
      <div className="flex pt-[33px] pb-[27px] pl-[30px]">
        <ChartWidget title="Daily Transaction Volume" value="2,342" />
        <ChartWidget title="Daily Transaction Value" value="₦4,000,000" />
        <ChartWidget title="Total Transaction Volume" value="452,000" />
        <ChartWidget title="Total Transaction Value" value="₦4,000,000" />
      </div>
      <div className="w-full pl-[30px] max-w-[1068px] mb-[43px]">
        <OrderWidget />
      </div>

      <h3 className="pl-[30px] text-4xl">Payments</h3>
    </div>
  );
}
