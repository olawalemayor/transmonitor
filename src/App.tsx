import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Sidebar, Content } from "./components";

function App() {
  return (
    <div>
      <header className="shadow-md">
        <Navbar />
      </header>
      <div className="flex segoe">
        <div className="w-full xl:w-[260px]">
          <div className="fixed h-full shadow-sm xl:w-[260px]">
            <Sidebar />
          </div>
        </div>
        <div className="h-full bg-[#E5E5E5] xl:w-[calc(100vw-260px)]">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
