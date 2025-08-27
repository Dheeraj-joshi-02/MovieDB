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
              className="group relative w-[75%] flex-shrink-0 rounded-lg shadow-md sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%]"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-lg sm:h-48 md:h-56 lg:h-60">
                <img
                  src={
                    item.backdrop_path || item.profile_path
                      ? `https://image.tmdb.org/t/p/original/${
                          item.backdrop_path || item.profile_path
                        }`
                      : NoImage
                  }
                  alt={item.name || item.title || "No title"}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>

                <div className="absolute right-0 bottom-2 left-0 translate-y-[-20px] transform px-3 py-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <h2 className="truncate text-base font-bold text-white sm:text-lg md:text-xl">
                    {item.name ||
                      item.title ||
                      item.original_name ||
                      item.original_title}
                  </h2>
                  <p className="mt-1 line-clamp-2 text-xs text-gray-300 sm:text-sm md:text-base">
                    {item.overview?.split(" ").slice(0, 12).join(" ")}...
                  </p>
                </div>
              </div>
              {item.vote_average && (
                <span className="absolute -top-2 -right-2 z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-bl-2xl bg-black/70 p-2 text-sm font-semibold text-yellow-400">
                  {(item.vote_average * 10).toFixed(0)}%
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HorizontalCards;
