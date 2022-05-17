import React from "react";
import ChartWidget from "./chartWidget";
import OrderWidget from "./orderWidget";
import PaymentTable from "./paymentTable";

export default function Content() {
  return (
    <div className="lg:px-2 xl:px-0">
      <div className="flex flex-col flex-wrap sm:justify-between sm:flex-row px-2 lg:px-0 pt-[33px] pb-[27px] xl:pl-[30px] max-w-[1068px]">
        <div className="sm:w-[49%] xl:w-1/4 my-2 lg:my-0">
          <ChartWidget title="Daily Transaction Volume" value="2,342" />
        </div>
        <div className="sm:w-[49%] xl:w-1/4 my-2 lg:my-0">
          <ChartWidget title="Daily Transaction Value" value="₦4,000,000" />
        </div>
        <div className="sm:w-[49%] xl:w-1/4 my-2 lg:my-0">
          <ChartWidget title="Total Transaction Volume" value="452,000" />
        </div>
        <div className="sm:w-[49%] xl:w-1/4 my-2 lg:my-0">
          <ChartWidget title="Total Transaction Value" value="₦4,000,000" />
        </div>
      </div>

      <div className="w-full xl:pl-[30px] max-w-[1068px] mb-[43px]">
        <OrderWidget />
      </div>

      <h3 className="pl-[30px] text-4xl mb-5">Payments</h3>
      <PaymentTable />
    </div>
  );
}
