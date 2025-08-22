import React, { useEffect, useState } from "react";
import SideBar from "./components/home/SideBar";
import Header from "./components/home/Header";
import Display from "./components/home/Display";
import axios from "./utils/Axios";
import HorizontalCards from "./components/home/HorizontalCards";
import Loader from "./components/loader/Loader";
import CustomDropdown from "./components/home/Dropdown";

const App = () => {
  document.title = "MoiveDB | Homepage";

  const [wallpaper, setWallpaper] = useState(null);
  const [trendingWallpaper, setTrendingWallpaper] = useState([]);
  const [category, setCategory] = useState("all");

  const getTrendingWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrendingWallpaper(data.results);
    } catch (error) {
      console.log(`fetchTrendingWallpaper Error: ${error}`);
    }
  };

  const getTrendingRandomWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomIndex = Math.floor(Math.random() * data.results.length);
      let randomData = data.results[randomIndex];
      setWallpaper(randomData);
    } catch (error) {
      console.log(`fetchTrendingRandomWallpaper Error: ${error}`);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getTrendingWallpaper();
      !wallpaper && getTrendingRandomWallpaper();
    }, 200);

    return () => clearInterval(setTimeout);
  }, [category]);

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
                  {/* Dropdown */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 sm:p-4 md:p-6">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-300">
                      Trending
                    </h1>
                    <CustomDropdown
                      title="Filter"
                      options={["tv", "movies", "all"]}
                      func={(e) => setCategory(e.target.value)}
                    />
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
