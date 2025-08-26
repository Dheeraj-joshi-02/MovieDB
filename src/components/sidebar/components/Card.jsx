import React from "react";
import NoImage from "../../../assets/No-image.png";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <React.Fragment>
      <div className="w-full p-4 sm:p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="relative min-h-[18rem] w-full rounded-lg shadow-md transition-shadow hover:shadow-xl"
            >
              <Link>
                <div className="relative h-full overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                  <img
                    className="h-full w-full object-cover"
                    src={
                      item.backdrop_path || item.profile_path
                        ? `https://image.tmdb.org/t/p/original/${
                            item.backdrop_path || item.profile_path
                          }`
                        : NoImage
                    }
                    alt={item.name || item.title || "No title"}
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
                </div>
                <div className="absolute right-0 bottom-4 left-0 mx-2 truncate rounded-md bg-black/50 px-2 py-1">
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
                {item.vote_average && (
                  <span className="absolute -top-5 -right-5 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 px-2 py-1 text-sm font-semibold text-yellow-400">
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
