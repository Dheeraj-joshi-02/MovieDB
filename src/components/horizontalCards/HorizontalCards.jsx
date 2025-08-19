import NoImage from "../../assets/No-image.png";
import React from "react";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full h-[40%] p-5 ">
      <h1 className="text-3xl font-semibold text-zinc-400 mb-5">Trending</h1>
      <div className="flex h-full gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {data.map((item, id) => (
          <div
            key={id}
            className="w-[15%] max-w-[180px]  flex-shrink-0 bg-zinc-900"
          >
            <img
              src={
                item.backdrop_path || item.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${
                      item.backdrop_path || item.profile_path
                    }`
                  : NoImage
              }
              alt=""
            />
            <div className="p-3">
              <h2 className="text-md sm:text-lg md:text-xl font-bold text-white">
                {item.name ||
                  item.title ||
                  item.original_name ||
                  item.original_title}
              </h2>
              <p className="mt-1 text-gray-300 text-sm sm:text-base">
                {item.overview?.split(" ").slice(0, 5).join(" ")} ...more
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
