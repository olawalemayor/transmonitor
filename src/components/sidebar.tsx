import React from "react";
import "../styles/sidebar.css";

import {
  overviewIcon,
  recordIcon,
  wallet1Icon,
  wallet2Icon,
  wallet3Icon,
  paperIcon,
  pendingPaperIcon,
  reconciledPaperIcon,
  userProfileIcon,
} from "../assets/icons";

const IconBox = ({ icon, text, isActive }: any) => {
  const constantClass = "flex w-full py-[10px] sidebar-item";
  const itemClass = isActive ? " active-item" : "";

  return (
    <div className={constantClass + itemClass}>
      <img src={icon} alt={text} className="xl:pl-[42px]" />
      <div className="pl-[14px]">{text}</div>
    </div>
  );
};

export default function Sidebar() {
  return (
    <div className="pt-[33px]">
      <button className="uppercase text-[12px] font-bold py-[9px] px-[25px] rounded-[30px] bg-[#27AE60] text-white xl:ml-[31px]">
        generate invoice
      </button>

      <div className="text-[11px] leading-[14.63px] capitalize segoe">
        <div className="pb-[35px]">
          <h3 className="xl:pl-[42px] py-[14px]">Main</h3>
          <IconBox icon={overviewIcon} text="Overview" isActive={true} />
        </div>

        <div className="pb-[32px]">
          <h3 className="xl:pl-[42px] py-[14px]">Payments</h3>
          <IconBox icon={wallet1Icon} text="All Payments" isActive={false} />
          <IconBox
            icon={wallet2Icon}
            text="Reconcilled Payments"
            isActive={false}
          />
          <IconBox
            icon={wallet3Icon}
            text="Un - Reconcilled Payments"
            isActive={false}
          />
          <IconBox
            icon={recordIcon}
            text="Manual Settlement"
            isActive={false}
          />
        </div>

        <div>
          <h3 className="xl:pl-[42px] py-[14px]">Orders</h3>
          <IconBox icon={paperIcon} text="All Orders" isActive={false} />
          <IconBox
            icon={pendingPaperIcon}
            text="Pending Orders"
            isActive={false}
          />
          <IconBox
            icon={reconciledPaperIcon}
            text="Reconcilled Orders"
            isActive={false}
          />
        </div>

        <IconBox
          icon={userProfileIcon}
          text="Merchant Profile"
          isActive={false}
        />
      </div>
    </div>
  );
}
