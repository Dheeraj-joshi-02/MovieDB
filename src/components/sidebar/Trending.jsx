import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../home/Dropdown";
import axios from "../../utils/Axios";
import Card from "./components/Card";
import Loader from "../loader/Loader";
import theme from "../../config/theme";

const Trending = () => {
  document.title = "MoiveDB | Trending";

  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [time, setTime] = useState("day");
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const { data } = await axios.get(`/trending/${category}/${time}`);
        console.log(data);
        setTrendings(data?.results);
      } catch (error) {
        console.log(`fetchTrendingWallpaper Error: ${error}`);
      }
    };
    getTrending();
  }, [category, time]);

  return trendings.length > 0 ? (
    <React.Fragment>
      <div
        className={`bg-gradient min-h-screen w-full text-white ${theme.colors.background}`}
      >
        {/* Header Section */}
        <div className="flex w-full flex-col items-start justify-between gap-4 border-b border-gray-800 p-4 sm:flex-row sm:items-center sm:p-[2%]">
          {/* Left Heading */}
          <h1 className="flex items-center gap-2 text-xl font-bold text-white sm:text-2xl">
            <ArrowLeft
              onClick={() => navigate(-1)}
              className="cursor-pointer text-gray-400 transition hover:text-purple-500"
            />
            Trending
          </h1>

          {/* Right Filters */}
          <div className="flex w-full gap-2 sm:w-auto">
            <Dropdown
              className="w-full sm:w-auto"
              title="Category"
              options={["movie", "tv", "all"]}
              func={(e) => setCategory(e.target.value)}
            />
            <Dropdown
              className="w-full sm:w-auto"
              title="Time"
              options={["week", "day"]}
              func={(e) => setTime(e.target.value)}
            />
          </div>
        </div>

        {/* Card Section */}
        <div className="w-full px-4 sm:px-[2%]">
          <Card data={trendings} title={category} />
        </div>
      </div>
    </React.Fragment>
  ) : (
    <Loader />
  );
};

export default Trending;
