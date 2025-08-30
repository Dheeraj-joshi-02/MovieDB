import React, { useEffect, useState } from "react";
import axios from "../../utils/Axios";
import Card from "./components/Card";
import Loader from "../loader/Loader";

const People = () => {
  document.title = "MoiveDB | People";

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
      <div className={`min-h-screen w-full text-white`}>
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
