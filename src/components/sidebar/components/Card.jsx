import React from "react";
import NoImage from "../../../assets/No-image.png";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <React.Fragment>
      <div className="w-full p-4 sm:p-6">
        <div className="xs:grid-cols-2 grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="bg-card min-h-52 w-full rounded-lg shadow-md transition hover:shadow-xl" // Width controlled by grid
            >
              <Link>
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                    src={
                      item.backdrop_path || item.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${
                            item.backdrop_path || item.profile_path
                          }`
                        : "path-to-placeholder-image.jpg"
                    }
                    alt={item.name || item.title || ""}
                  />
                </div>
                <h2 className="mt-1 truncate p-2 text-base font-bold text-white sm:text-lg md:text-xl">
                  {item.name ||
                    item.title ||
                    item.original_name ||
                    item.original_title}
                </h2>
                <p className="mt-1 line-clamp-2 p-2 text-xs text-gray-400 sm:text-sm md:text-base">
                  {item.overview?.split(" ").slice(0, 10).join(" ")}...
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
