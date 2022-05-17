import React from "react";
import DateChart from "./dateChart";

const today = new Date();

export default function OrderWidget() {
  return (
    <div className="flex flex-col lg:flex-row w-full shadow-sm px-2 lg:px-0">
      <div className="lg:w-[65%] bg-white pl-[34px] pt-[26px]">
        <div className="flex w-full justify-between items-center">
          <div className="xl:w-3/5">
            <span className="text-lg font-bold">
              Today : {today.toDateString()}
            </span>
          </div>

          <div className="xl:w-2/5 flex justify-between items-center">
            <select
              name="month"
              id="month"
              className="text-xs text-[#7F8FA4] border border-[#DDE0E3] p-[10px] rounded-md"
            >
              <option value="janjun" className="text-xs text-[#7F8FA4]">
                1 Jan - 1 Jun
              </option>
            </select>

            <div className="flex w-full justify-center">
              <button className="text-[#CCCFD4] h-[22.97px] w-[29.36px] border border-[#CCCFD4] rounded mx-2 flex items-center justify-center">
                {"<"}
              </button>
              <button className="text-[#CCCFD4] h-[22.97px] w-[29.36px] border border-[#CCCFD4] rounded mx-2 flex items-center justify-center">
                {">"}
              </button>
            </div>
          </div>
        </div>
        <DateChart />
      </div>

      <div className="lg:w-[35%] md:flex md:justify-between lg:block px-0">
        <div className="shadow-sm lg:mx-0.5 text-sm bg-white px-[25px] py-[21px] my-2 md:w-[49%] lg:w-auto">
          <div className="font-bold pb-3">Orders</div>
          <div className="flex pb-3">
            <div className="bg-[#27AE60] h-1 w-4/5"></div>
            <div className="bg-[#FDC203] h-1 w-1/5"></div>
          </div>
          <div className="pb-3">
            Pending Orders :{" "}
            <span className="font-bold text-[#fdc203]">20</span>
          </div>
          <div className="pb-3">
            Reconciled Orders :{" "}
            <span className="font-bold text-[#27ae60]">80</span>
          </div>
          <div className="pb-3">
            Total Orders : <span className="font-bold text-[#1860EC]">100</span>
          </div>
        </div>

        <div className="shadow-sm lg:m-0.5 text-sm bg-white px-[25px] py-[21px] md:w-[49%] my-2 lg:w-auto">
          <div className="font-bold pb-3">Payments</div>
          <div className="flex pb-3">
            <div className="bg-[#27AE60] h-1 w-4/5"></div>
            <div className="bg-[#FDC203] h-1 w-1/5"></div>
          </div>
          <div className="pb-3">
            Un-reconciled Payments :{" "}
            <span className="font-bold text-[#FDC203]">20</span>
          </div>
          <div className="pb-3">
            Reconciled Payments :{" "}
            <span className="font-bold text-[#27ae60]">80</span>
          </div>
          <div className="pb-3">
            Total Payments :{" "}
            <span className="font-bold text-[#1860EC]">100</span>
          </div>
        </div>
      </div>
    </div>
  );
}
