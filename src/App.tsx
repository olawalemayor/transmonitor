import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Sidebar, Content } from "./components";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.screen.width >= 1024) setIsVisible(true);
  }, [setIsVisible]);

  return (
    <div>
      <header className="">
        <div className="fixed top-0 w-full z-30 bg-white shadow-md">
          <Navbar isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
      </header>
      <div className=" lg:flex segoe overflow-scroll mt-14">
        {isVisible && (
          <div className="w-full lg:max-w-[260px] lg:block">
            <div className="z-20 fixed h-full w-full md:w-1/2 lg:w-[260px] slide-in-left">
              <Sidebar />
            </div>
          </div>
        )}
        <div className="h-full bg-[#E5E5E5] w-full lg:w-[calc(100vw-260px)]">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
