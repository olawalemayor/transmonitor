import React from "react";
import DateChart from "./dateChart";

const today = new Date();

export default function OrderWidget() {
  return (
    <div className="flex w-full shadow-sm">
      <div className="w-[65%] bg-white pl-[34px] pt-[26px]">
        <div className="flex w-full justify-between">
          <div>
            <span className="text-lg font-bold">
              Today : {today.toDateString()}
            </span>
          </div>

          <div>
            <input type="month" name="month" id="month" className="mr-4" />

            <button className="bg-[#CCCFD4] h-[22.97px] w-[29.36px] border mx-2 rounded">
              {"<"}
            </button>
            <button className="bg-[#CCCFD4] h-[22.97px] w-[29.36px] border mx-2 rounded">
              {">"}
            </button>
          </div>
        </div>
        <DateChart />
      </div>

      <div className="w-[35%]">
        <div className="shadow-sm mx-0.5 text-sm bg-white px-[25px] py-[21px]">
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

        <div className="shadow-sm m-0.5 text-sm bg-white px-[25px] py-[21px]">
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
