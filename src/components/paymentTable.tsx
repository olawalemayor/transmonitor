import React from "react";
import { searchIcon } from "../assets/icons";

const pagination = Array.from({ length: 20 }, (x, i) => i);

export default function PaymentTable() {
  return (
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
        <div>
          <button>
            <img src={searchIcon} alt="search" />
          </button>
          <input
            type="text"
            placeholder="Search payments"
            className="bg-transparent border-b border-2 border-bl"
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
  );
}
