import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/Axios";
import Card from "./components/Card";
import Loader from "../loader/Loader";

const People = () => {
  document.title = "MoiveDB | People";

  const navigate = useNavigate();
  const [People, setPeople] = useState([]);

  const getPeople = async () => {
    try {
      const { data } = await axios.get(`person/popular`);
      console.log(data);
      setPeople(data?.results);
    } catch (error) {
      console.log(`fetchTrendingWallpaper Error: ${error}`);
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  return People.length > 0 ? (
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
            People
          </h1>
        </div>

        {/* Card Section */}
        <div className="w-full px-4 sm:px-[2%]">
          <Card data={People} title={"popular"} />
        </div>
      </div>
    </React.Fragment>
  ) : (
    <Loader />
  );
};

export default People;
