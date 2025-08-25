import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../home/Dropdown";
import axios from "axios";
import Card from "./components/Card";
import Loader from "../loader/Loader";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [time, setTime] = useState("day");
  const [trendings, setTrendings] = useState([]);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${time}`);
      console.log(data.results);
    } catch (error) {
      console.log(`fetchTrendingWallpaper Error: ${error}`);
    }
  };

  useEffect(() => {
    getTrending();
  }, [category, time]);

  return trendings ? (
    <React.Fragment>
      <div className="bg-gradient h-screen w-full p-[3%] text-white">
        <div className="flex w-full items-center justify-between">
          <h1 className="flex items-center gap-2 text-2xl font-semibold text-zinc-300">
            <ArrowLeft
              onClick={() => navigate(-1)}
              className="cursor-pointer hover:text-[#6565cd]"
            />
            Trending
          </h1>
          <div className="flex gap-2">
            <Dropdown
              title="Category"
              options={["movie", "tv", "all"]}
              func=""
            />
            <Dropdown title="Time" options={["week", "day"]} func="" />
          </div>
        </div>
        <Card data={trendings} title={category} />
      </div>
    </React.Fragment>
  ) : (
    <Loader />
  );
};

export default Trending;
