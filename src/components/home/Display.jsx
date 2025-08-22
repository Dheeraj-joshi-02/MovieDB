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
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="flex min-h-[40vh] w-full items-center sm:min-h-[50vh] lg:min-h-[60vh]"
        >
          <div className="w-full p-4 sm:p-8 md:p-10 lg:w-3/4 lg:p-16 xl:w-[80%]">
            {/* Title */}
            <h1 className="text-2xl leading-tight font-extrabold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {data.name ||
                data.title ||
                data.original_name ||
                data.original_title}
            </h1>

            {/* Overview */}
            <p className="mt-3 line-clamp-3 text-sm text-gray-300 sm:mt-4 sm:line-clamp-4 sm:text-base md:text-lg lg:line-clamp-none lg:text-xl">
              {data.overview?.split(" ").slice(0, 12).join(" ")}....
            </p>

            {/* Meta info */}
            <div className="mt-4 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-5">
              <p className="flex items-center gap-2 text-sm text-yellow-500 sm:text-base">
                <Megaphone className="h-4 w-4 sm:h-5 sm:w-5" />
                {data.release_date ? data.release_date : "No information"}
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-200 sm:text-base">
                <Tv2 className="h-4 w-4 sm:h-5 sm:w-5" />
                {data.media_type || "Unknown"}
              </p>
            </div>

            {/* Button */}
            <button className="bg-btn-gradient mt-6 cursor-pointer rounded-lg px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 sm:mt-8 sm:text-base">
              Watch Trailer
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Display;
