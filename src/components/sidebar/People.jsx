import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/Axios";
import Card from "./components/Card";
import Loader from "../loader/Loader";
import theme from "../../config/theme";

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
      <div
        className={`bg-gradient min-h-screen w-full text-white ${theme.colors.background}`}
      >
        {/* Card Section */}
        <div className="flex w-full gap-2 sm:w-auto">
          <Card data={People} title={"popular"} />
        </div>
      </div>
    </React.Fragment>
  ) : (
    <Loader />
  );
};

export default People;
