import { Megaphone, Tv2 } from "lucide-react";
import React from "react";

const Display = ({ data }) => {
  return (
    <>
      {data && (
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${
              data.backdrop_path || data.profile_path || ""
            })`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full max-h-[40vh] sm:max-h-[60vh] lg:max-h-[80vh] flex items-center"
        >
          <div className="p-4 sm:p-8 md:p-10 lg:p-16 w-full lg:w-3/4 xl:w-1/2">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-extrabold leading-tight">
              {data.name ||
                data.title ||
                data.original_name ||
                data.original_title}
            </h1>

            {/* Overview */}
            <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
              {data.overview?.split(" ").slice(0, 12).join(" ")}....
            </p>

            {/* Meta info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 mt-4">
              <p className="text-yellow-500 flex items-center gap-2 text-sm sm:text-base">
                <Megaphone className="w-4 h-4 sm:w-5 sm:h-5" />
                {data.release_date ? data.release_date : "No information"}
              </p>
              <p className="flex items-center gap-2 text-sm sm:text-base text-gray-200">
                <Tv2 className="w-4 h-4 sm:w-5 sm:h-5" />
                {data.media_type || "Unknown"}
              </p>
            </div>

            {/* Button */}
            <button className="mt-6 sm:mt-8 bg-gradient-to-br from-blue-500 to-purple-600 px-5 py-3 rounded-lg cursor-pointer text-white font-semibold text-sm sm:text-base hover:scale-105 transition-transform">
              Watch Trailer
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Display;
