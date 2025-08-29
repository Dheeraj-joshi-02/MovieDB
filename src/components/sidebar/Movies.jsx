import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../home/Dropdown";
import axios from "../../utils/Axios";
import Card from "./components/Card";
import Loader from "../loader/Loader";
import theme from "../../config/theme";

const Movies = () => {
  document.title = "MoiveDB | Movies";

  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get(`movie/${category}`);
        setMovies(data?.results);
      } catch (error) {
        console.log(`fetchTrendingWallpaper Error: ${error}`);
      }
    };
    getMovies();
  }, [category]);

  return movies.length > 0 ? (
    <React.Fragment>
      <div
        className={`bg-gradient min-h-screen w-full text-white ${theme.colors.background}`}
      >
        {/* Header Section */}
        <div className="float-end flex w-full justify-end gap-4 p-4 sm:flex-row sm:items-center sm:p-[2%]">
          <div className="flex w-full gap-2 sm:w-auto">
            <Dropdown
              className="w-full sm:w-auto"
              title="Filter"
              options={["popular", "top_rated", "upcoming", "now_playing"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        {/* Card Section */}
        <div className="w-fullsm:px-[2%]">
          <Card data={movies} title={category} />
        </div>
      </div>
    </React.Fragment>
  ) : (
    <Loader />
  );
};

export default Movies;
