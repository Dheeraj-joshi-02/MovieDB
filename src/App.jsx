import { useState } from "react";
import SideBar from "./components/home/SideBar";
import Header from "./components/home/Header";
import { Outlet } from "react-router-dom";
import React from "react";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <React.Fragment>
      <div className="m-auto flex h-screen bg-[#000000] text-white">
        <div className="flex h-[100%] w-full overflow-hidden">
          {/* SideBar Section */}
          <SideBar isOpen={sidebarOpen} onClose={handleCloseSidebar} />
          <div className="flex w-full min-w-0 flex-1 flex-col">
            {/* Header Section */}
            <Header onMenuClick={handleMenuClick} />
            {/* Main content */}
            <main className="flex-1 overflow-y-auto">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
