import NoImage from "../../assets/No-image.png";
import React from "react";

const HorizontalCards = ({ data }) => {
  return (
    <React.Fragment>
      <div className="w-full p-4 sm:p-6">
        {/* Horizontal scrollable cards */}
        <div className="scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 flex gap-4 overflow-hidden overflow-x-auto p-3">
          {data.map((item, id) => (
            <div
              key={id}
              className="bg-card w-[75%] flex-shrink-0 rounded-lg shadow-md duration-300 hover:scale-105 hover:shadow-xl sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%]"
            >
              <div className="h-40 w-full overflow-hidden rounded-t-lg sm:h-48 md:h-56 lg:h-60">
                <img
                  src={
                    item.backdrop_path || item.profile_path
                      ? `https://image.tmdb.org/t/p/original/${
                          item.backdrop_path || item.profile_path
                        }`
                      : NoImage
                  }
                  alt={item.name || item.title || "No title"}
                  className="h-full w-full bg-gradient-to-b from-transparent via-black/20 to-black/80 object-cover"
                />
              </div>
              <div className="p-3">
                <h2 className="truncate text-base font-bold text-white sm:text-lg md:text-xl">
                  {item.name ||
                    item.title ||
                    item.original_name ||
                    item.original_title}
                </h2>
                <p className="mt-1 line-clamp-2 text-xs text-gray-400 sm:text-sm md:text-base">
                  {item.overview?.split(" ").slice(0, 12).join(" ")}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HorizontalCards;
