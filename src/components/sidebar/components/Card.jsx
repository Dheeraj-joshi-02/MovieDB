import React from "react";
import NoImage from "../../../assets/No-image.png";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <React.Fragment>
      <div className="w-full overflow-hidden p-4 sm:p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="group relative min-h-[18rem] w-full rounded-lg overflow-hidden"
            >
              <Link>
                {/* Image */}
                <div className="relative h-full overflow-hidden rounded-lg transition-transform duration-300">
                  <img
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={
                      item.backdrop_path || item.profile_path
                        ? `https://image.tmdb.org/t/p/original/${
                            item.backdrop_path || item.profile_path
                          }`
                        : NoImage
                    }
                    alt={item.name || item.title || "No title"}
                  />
                </div>

                <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>

                <div className="absolute right-0 bottom-0 left-0 h-full w-full -translate-y-[-100px] transform truncate rounded-lg opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="absolute right-0 bottom-0 left-0 flex flex-col items-start justify-between gap-2 p-2">
                    <h2 className="text-base font-bold text-white sm:text-sm md:text-lg">
                      {item.name ||
                        item.title ||
                        item.original_name ||
                        item.original_title}
                    </h2>
                    <span className="text-yellow-400">
                      {item.release_date || item.first_air_date}
                    </span>
                  </div>
                </div>
                {item.vote_average && (
                  <span className="absolute -top-2 -right-2 z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-bl-2xl bg-black/70 p-2 text-sm font-semibold text-yellow-400">
                    {(item.vote_average * 10).toFixed(0)}%
                  </span>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
