import React from "react";
import SideBar from "./components/sideBar/SideBar";
import Header from "./components/header/Header";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <React.Fragment>
      <div className="flex h-screen bg-[#000000] text-white">
        <div className="flex h-screen overflow-hidden w-full">
          {/* SideBar Section */}
          <SideBar isOpen={sidebarOpen} onClose={handleCloseSidebar} />
          <div className="flex min-w-0 flex-1 flex-col w-full">
            {/* Header Section */}
            <Header onMenuClick={handleMenuClick} />
            {/* Main content */}
            <main className="flex-1 overflow-y-auto">
              <div className="mx-auto h-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"></div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
