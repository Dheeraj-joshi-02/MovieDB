import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../home/Dropdown";
import axios from "../../utils/Axios";
import Card from "./components/Card";
import Loader from "../loader/Loader";

const Popular = () => {
  document.title = "MoiveDB | Popular";

  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [populars, setPopular] = useState([]);

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular`);
      setPopular(data?.results);
    } catch (error) {
      console.log(`fetchTrendingWallpaper Error: ${error}`);
    }
  };

  useEffect(() => {
    getPopular();
  }, [category]);

  return populars.length > 0 ? (
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
            Popular
          </h1>

          {/* Right Dropdowns */}
          <div className="flex w-full flex-col justify-end-safe gap-2 sm:flex-row">
            <Dropdown
              className="w-full sm:w-auto"
              title="Category"
              options={["movie", "tv"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        {/* Card Section */}
        <div className="w-full px-4 sm:px-[2%]">
          <Card data={populars} title={category} />
        </div>
      </div>
    </React.Fragment>
  ) : (
    <Loader />
  );
};

export default Popular;
