import NoImage from "../../assets/No-image.png";
import Dropdown from "../dropdown/Dropdown";
import React from "react";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-300">
          Trending
        </h1>
        <Dropdown title="Filter" options={["TV", "Movies", "All"]} />
      </div>

      {/* Horizontal scrollable cards */}
      <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 pb-3">
        {data.map((item, id) => (
          <div
            key={id}
            className="flex-shrink-0 bg-zinc-900 rounded-lg shadow-md hover:shadow-xl transition
            w-[75%] sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%]"
          >
            {/* Image */}
            <div className="w-full h-40 sm:h-48 md:h-56 lg:h-60 overflow-hidden rounded-t-lg">
              <img
                src={
                  item.backdrop_path || item.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${
                        item.backdrop_path || item.profile_path
                      }`
                    : NoImage
                }
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text */}
            <div className="p-3">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-white truncate">
                {item.name ||
                  item.title ||
                  item.original_name ||
                  item.original_title}
              </h2>
              <p className="mt-1 text-gray-400 text-xs sm:text-sm md:text-base line-clamp-2">
                {item.overview?.split(" ").slice(0, 12).join(" ")}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
