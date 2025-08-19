import React, { useEffect, useState } from "react";
import SideBar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";
import Display from "./components/display/Display";
import axios from "./utils/Axios";
import HorizontalCards from "./components/horizontalCards/HorizontalCards";
import Loader from "./components/loader/Loader";

const App = () => {
  document.title = "MoiveDB | Homepage";

  const [wallpaper, setWallpaper] = useState([]);
  const [trendingWallpaper, setTrendingWallpaper] = useState([]);
  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const { data } = await axios.get(`/trending/all/day`);
        setTrendingWallpaper(data.results);
        let randomIndex = Math.floor(Math.random() * data.results.length);
        let randomData = data.results[randomIndex];
        setWallpaper(randomData);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    fetchTrending();
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
        <div className="flex h-[100%] overflow-hidden w-full">
          {/* SideBar Section */}
          <SideBar isOpen={sidebarOpen} onClose={handleCloseSidebar} />
          {wallpaper && trendingWallpaper ? (
            <div className="flex min-w-0 flex-1 flex-col w-full">
              {/* Header Section */}
              <Header onMenuClick={handleMenuClick} />
              {/* Main content */}
              <main className="flex-1 overflow-y-auto">
                <div className="mb-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Display data={wallpaper} />
                  </div>
                  <HorizontalCards data={trendingWallpaper} />
                </div>
              </main>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
