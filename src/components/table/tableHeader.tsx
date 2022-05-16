import React from "react";

export default function TableHeader({ tableHeadings }: any) {
  return (
    <div className="flex justify-between text-[#7F8FA4] bg-[#EAEEF0] px-[26px]">
      <div className="flex justify-start w-2/5 capitalize">Item type</div>
      <div className="flex justify-between w-3/5">
        {tableHeadings.map((item: string) => (
          <div key={item} className="flex justify-start w-full capitalize">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
