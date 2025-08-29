import React, { useEffect, useState } from "react";
import Dropdown from "../home/Dropdown";
import axios from "../../utils/Axios";
import Card from "./components/Card";
import Loader from "../loader/Loader";
import theme from "../../config/theme";

const Popular = () => {
  document.title = "MoiveDB | Popular";

  const [category, setCategory] = useState("movie");
  const [populars, setPopular] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      try {
        const { data } = await axios.get(`${category}/popular`);
        setPopular(data?.results);
      } catch (error) {
        console.log(`fetchTrendingWallpaper Error: ${error}`);
      }
    };
    getPopular();
  }, [category]);

  return populars.length > 0 ? (
    <React.Fragment>
      <div
        className={`bg-gradient min-h-screen w-full text-white ${theme.colors.background}`}
      >
        {/* Header Section */}
        <div className="float-end flex w-full flex-col justify-end gap-4 p-4 sm:flex-row sm:items-center sm:p-[2%]">
          <div className="flex w-full gap-2 sm:w-auto">
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
