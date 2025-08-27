import { useEffect, useState } from "react";
import SideBar from "./components/home/SideBar";
import Header from "./components/home/Header";
import Display from "./components/home/Display";
import axios from "./utils/Axios";
import HorizontalCards from "./components/home/HorizontalCards";
import Loader from "./components/loader/Loader";
import React from "react";
import Dropdown from "./components/home/Dropdown";

const App = () => {
  document.title = "MoiveDB | Homepage";

  const [wallpaper, setWallpaper] = useState(null);
  const [trendingWallpaper, setTrendingWallpaper] = useState(null);
  const [category, setCategory] = useState("all");

  const getTrendingWallpaper = React.useCallback(async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrendingWallpaper(data.results);
    } catch (error) {
      console.log(`fetchTrendingWallpaper Error: ${error}`);
    }
  }, [category]);

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
    const timeoutId = setTimeout(() => {
      getTrendingWallpaper();
      !wallpaper && getTrendingRandomWallpaper();
    });

    return () => clearTimeout(timeoutId);
  }, [category, getTrendingWallpaper, wallpaper]);

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
            {wallpaper && trendingWallpaper ? (
              <main className="flex-1 overflow-y-auto">
                <div className="mb-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Display data={wallpaper} />
                  </div>
                  {/* Dropdown */}
                  <div className="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4 md:p-6">
                    <h1 className="text-2xl font-semibold text-zinc-300 sm:text-3xl">
                      Trending
                    </h1>
                    <Dropdown
                      title="Filter"
                      options={["tv", "movie", "all"]}
                      func={(e) => setCategory(e.target.value)}
                    />
                  </div>
                  {/* Horizonatal Cards */}
                  <HorizontalCards data={trendingWallpaper} />
                </div>
              </main>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
