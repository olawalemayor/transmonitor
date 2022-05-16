import React from "react";

export default function TableRow({
  displayName,
  name,
  price,
  transactionNo,
  time,
  status,
}: any) {
  return (
    <div className="flex items-center justify-between bg-white py-[20px] px-[26px] border-b border-[#CCCFD4] text-sm">
      <div className="flex items-center justify-start w-2/5">
        <span className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-[#7F8FA4] text-white">
          {displayName}
        </span>
        <div className="text-[#414042] pl-[26px] capitalize">{name}</div>
      </div>

      <div className="flex justify-between w-3/5 items-center">
        <div className="text-[#7F8FA4] flex justify-start w-full">{price}</div>

        <div className="text-[#7F8FA4] flex justify-start w-full">
          {transactionNo}
        </div>

        <div className="text-[#7F8FA4] flex justify-start w-full">{time}</div>

        <div className="flex justify-start w-full">
          <div className="rounded-[30px] border border-[#CCCFD4] p-3 mr-[33px]">
            {statusBar(status)}
          </div>
          <button className="text-[#CCCFD4]">⯆</button>
        </div>
      </div>
    </div>
  );
}

//get status
const statusBar = (status: string) => {
  switch (status) {
    case "reconciled":
      return (
        <div className="flex items-center w-[120px] text-xs text-[#27AE60]">
          <div className="rounded-full mr-[8px] h-[9px] w-[9px] bg-[#27AE60]"></div>
          <div className="min-w-max">Reconciled</div>
        </div>
      );

    case "pending":
      return (
        <div className="flex items-center w-[120px] text-xs text-[#EBC315]">
          <div className="rounded-full mr-[8px] h-[9px] w-[9px] bg-[#EBC315]"></div>
          <div className="min-w-max">Pending</div>
        </div>
      );

    case "unreconciled":
      return (
        <div className="flex items-center w-[120px] text-xs text-[#C4C4C4]">
          <div className="rounded-full mr-[8px] h-[9px] w-[9px] bg-[#C4C4C4]"></div>
          <div className="min-w-max">Un-Recoonciled</div>
        </div>
      );

    default:
      break;
  }
};
