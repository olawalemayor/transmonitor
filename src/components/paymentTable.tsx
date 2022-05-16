import React, { useState } from "react";
import { searchIcon } from "../assets/icons";
import { useEffect } from "react";
import { getTableData } from "../services/table";
import { TableHeader, TableRow } from "./table";

const pagination = Array.from({ length: 20 }, (x, i) => i);

const tableHeadings = ["Price", "Transaction No", "Time", "Status"];

export default function PaymentTable() {
  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(() => {
    setTableData(getTableData);
  }, [getTableData]);

  return (
    <div className="max-w-[1068px] pb-[40px]">
      <div className="flex items-center mb-[26px]">
        <div className="text-[13px] pr-[57px]">
          Showing{" "}
          <select
            name="pagination"
            id="pagination"
            className="border-0 text-right bg-transparent text-[#1875F0]"
          >
            {pagination.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>{" "}
          out of 500 payments
        </div>

        <div className="flex justify-between w-[50%]">
          <div className="border-b border-black w-full">
            <button>
              <img src={searchIcon} alt="search" />
            </button>
            <input
              type="text"
              placeholder="Search payments"
              className="bg-transparent outline-0"
            />
          </div>

          <div className="flex">
            <div>Show</div>
            <div>
              <select>
                {[
                  "All",
                  "Reconciled",
                  "Un-reconciled",
                  "Settled",
                  "Unsettled",
                ].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-[30px]">
        <TableHeader tableHeadings={tableHeadings} />
        {tableData.map(
          ({ displayName, name, price, status, time, transactionNo }) => (
            <TableRow
              key={Math.random()}
              displayName={displayName}
              name={name}
              price={price}
              status={status}
              time={time}
              transactionNo={transactionNo}
            />
          )
        )}
        <div className="flex justify-between items-center my-[26px]">
          <div className="text-black">Showing 1 to 10 of 500 entries</div>
          <div className="flex border border-[#CED0DA]">
            <button className="text-black px-[10px] py-[5px] border border-[#CED0DA]">
              Previous
            </button>
            <button className="text-white bg-[#1875F0] px-[10px] py-[5px] border border-[#CED0DA]">
              1
            </button>
            <button
              disabled
              className="text-[#979797] px-[10px] py-[5px] border border-[#CED0DA]"
            >
              2
            </button>
            <button className="text-black px-[10px] py-[5px] border border-[#CED0DA]">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
