import { Megaphone, Tv2 } from "lucide-react";
import React from "react";

const Display = ({ data }) => {
  return (
    <React.Fragment>
      {data && (
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${
              data.backdrop_path || data.profile_path || ""
            })`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[380px] flex items-center"
        >
          <div className="p-4 sm:p-8 md:p-10 lg:p-16 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold">
              {data.name ||
                data.title ||
                data.original_name ||
                data.original_title}
            </h1>
            <p className="mt-2 sm:mt-3 text-gray-300 sm:text-sm md:text-base lg:text-lg">
              {data.overview?.split(" ").slice(0, 20).join(" ")}...
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 mt-4">
              <p className="text-yellow-500 flex items-center gap-2">
                <Megaphone />{" "}
                {data.release_date ? data.release_date : "No information"}
              </p>
              <p className="flex items-center justify-center gap-2">
                <Tv2 />
                {data.media_type}
              </p>
            </div>
            <button className="mt-5 bg-gradient-to-br from-blue-500 to-purple-600 px-4 py-3 rounded-lg cursor-pointer">
              Watch Trailer
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Display;
