import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../home/Dropdown";
import axios from "../../utils/Axios";
import Card from "./components/Card";
import Loader from "../loader/Loader";

const Tv = () => {
  document.title = "MoiveDB | Tv";

  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [Tv, setTv] = useState([]);

  const getTv = async () => {
    try {
      const { data } = await axios.get(`tv/${category}`);
      setTv(data?.results);
    } catch (error) {
      console.log(`fetchTrendingWallpaper Error: ${error}`);
    }
  };

  useEffect(() => {
    getTv();
  }, [category]);

  return Tv.length > 0 ? (
    <React.Fragment>
      <div className="bg-gradient min-h-screen w-full text-white">
        {/* Header Section */}
        <div className="flex w-full flex-col items-start justify-between gap-4 p-4 sm:flex-row sm:items-center sm:p-[2%]">
          {/* Left Heading */}
          <h1 className="flex items-center gap-2 text-xl font-semibold text-zinc-300 sm:text-2xl">
            <ArrowLeft
              onClick={() => navigate(-1)}
              className="cursor-pointer hover:text-[#6565cd]"
            />
            Tv
          </h1>

          {/* Right Dropdowns */}
          <div className="flex w-full flex-col justify-end-safe gap-2 sm:flex-row">
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
