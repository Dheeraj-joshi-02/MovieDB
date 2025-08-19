import React, { useEffect, useState } from "react";
import SideBar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";
import Display from "./components/display/Display";
import axios from "./utils/Axios";

const App = () => {
  document.title = "MoiveDB | Homepage";

  const [wallpaper, setWallpaper] = useState([]);
  useEffect(() => {
    const getDisplayWallpaper = async () => {
      try {
        const { data } = await axios.get(`/trending/all/day`);
        let randomIndex = Math.floor(Math.random() * data.results.length);
        let randomData = data.results[randomIndex];
        setWallpaper(randomData);
        console.log(randomData);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };

    getDisplayWallpaper();
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);

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
              <div className="mb-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <Display data={wallpaper} />
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
