import React, { useEffect, useState } from "react";
import Dropdown from "../home/Dropdown";
import axios from "../../utils/Axios";
import Card from "./components/Card";
import Loader from "../loader/Loader";
import theme from "../../config/theme";

const Tv = () => {
  document.title = "MoiveDB | Tv";
  const [category, setCategory] = useState("airing_today");
  const [Tv, setTv] = useState([]);

  useEffect(() => {
    const getTv = async () => {
      try {
        const { data } = await axios.get(`tv/${category}`);
        setTv(data?.results);
      } catch (error) {
        console.log(`fetchTrendingWallpaper Error: ${error}`);
      }
    };
    getTv();
  }, [category]);

  return Tv.length > 0 ? (
    <React.Fragment>
      <div className={`min-h-screen w-full text-white`}>
        {/* Header Section */}
        <div className="float-end flex w-full justify-end gap-4 p-4 sm:flex-row sm:items-center sm:p-[2%]">
          <div className="flex w-full gap-2 sm:w-auto">
            <Dropdown
              className="w-full sm:w-auto"
              title="Filter"
              options={["on_the_air", "top_rated", "popular", "airing_today"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        {/* Card Section */}
        <div className="w-full px-4 sm:px-[2%]">
          <Card data={Tv} title={category} />
        </div>
      </div>
    </React.Fragment>
  ) : (
    <Loader />
  );
};

export default Tv;
