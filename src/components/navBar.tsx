import React from "react";
import "../styles/navbar.css";
import profileImage from "../assets/images/IMG-20180413-WA0005.png";

import SearchIcon from "../assets/icons/Search.svg";
import notificationBell from "../assets/icons/bell.svg";

const SearchBar = () => {
  return (
    <form className="flex w-full">
      <button type="submit" className="p-2">
        <img src={SearchIcon} alt="Search" />
      </button>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        className="w-full px-2"
      />
    </form>
  );
};

export default function Navbar() {
  return (
    <div className="flex items-center py-[15px] max-w-[1440px] mx-auto">
      <h1 className="text-[#1875F0] w-full text-center lg:w-[260px]">
        <a href="#" id="brand">
          TransMonitor
        </a>
      </h1>

      <div className="hidden lg:flex w-full justify-between items-center segoe">
        <div className="lg:block w-full lg:w-1/2 xl:w-7/12">
          <SearchBar />
        </div>

        <div className="flex justify-evenly items-center lg:w-1/2 xl:w-5/12">
          <a href="#">Support</a>
          <a href="#">FAQ</a>
          <button className="relative">
            <img src={notificationBell} alt="notifications" />
            <span className="bg-[#1860EC] text-[#FCFDFF] rounded-full w-[15px] h-[15px] text-[10px] absolute -top-1.5 -right-1">
              8
            </span>
          </button>

          <div className="flex">
            <div className="mr-[9px]">
              <span className="block text-right font-[10px] leading-[13.3px]">
                Hello
              </span>
              <span className="block text-[14px] leading-[18.62px]">
                Oluwaleke Ojo
              </span>
            </div>
            <img
              src={profileImage}
              alt="Profile Image"
              className="rounded-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
