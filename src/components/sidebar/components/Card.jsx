import React, { useState } from "react";
import NoImage from "../../../assets/No-image.png";
import { Link } from "react-router-dom";
import theme from "../../../../src/config/theme";

const Card = ({ data, title }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Function to format date as just the year (e.g., "2025")
  const formatYear = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).getFullYear();
  };

  // Function to determine rating color based on score
  const getRatingColor = (rating) => {
    if (rating >= 7.5) return "text-green-500";
    if (rating >= 5) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="w-full p-4 sm:p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`group relative min-w-56 overflow-hidden ${theme.radius.card} ${theme.colors.card} ${theme.transition.base} transform transition-transform duration-300 hover:scale-105`}
            onMouseEnter={() => setHoveredItem(idx)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link to={`${data.media_type || title}/details/${item.id}`}>
              {/* Poster with hover overlay */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  className={`h-full w-full object-cover ${theme.transition.img}`}
                  src={
                    item.poster_path || item.backdrop_path || item.profile_path
                      ? `https://image.tmdb.org/t/p/w500${
                          item.poster_path ||
                          item.backdrop_path ||
                          item.profile_path
                        }`
                      : NoImage
                  }
                  alt={item.name || item.title || "No title"}
                />

                {/* Hover Overlay with description */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end bg-black/70 p-3 opacity-0 group-hover:opacity-100 ${theme.transition.overlay}`}
                >
                  <p className={`mb-2 line-clamp-4 text-sm text-white`}>
                    {item.overview || "No description available."}
                  </p>

                  <Link to={`${data.media_type || title}/details/${item.id}`}>
                    <button
                      className={`${theme.colors.primary} w-full cursor-pointer rounded-md px-3 py-2 text-xs text-white transition-all duration-200 hover:brightness-110 ${theme.radius.button}`}
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className={`${theme.colors.primaryBackground} p-3`}>
                {/* Title with improved hierarchy */}
                <h2
                  className={`mb-1 line-clamp-1 text-lg font-bold ${theme.colors.text.heading}`}
                >
                  {item.name ||
                    item.title ||
                    item.original_name ||
                    item.original_title}
                </h2>

                {/* Meta information - less prominent */}
                <div
                  className={`mb-2 flex items-center justify-between text-xs ${theme.colors.text.muted}`}
                >
                  <span>
                    {formatYear(item.release_date || item.first_air_date)}
                  </span>
                  {item.original_language && (
                    <span className="uppercase">{item.original_language}</span>
                  )}
                </div>

                {/* Rating with visual emphasis */}
                <div className="flex items-center justify-between">
                  {item.vote_average && (
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-bold ${getRatingColor(item.vote_average)}`}
                      >
                        ⭐ {item.vote_average.toFixed(1)}
                      </span>
                      <span className={`text-xs ${theme.colors.text.muted}`}>
                        ({item.vote_count} votes)
                      </span>
                    </div>
                  )}

                  {/* Watch trailer button - only show on hover */}
                  <button
                    className={`text-xs ${theme.colors.card} rounded px-2 py-1 text-white transition-opacity duration-200 ${theme.radius.button} ${hoveredItem === idx ? "opacity-100" : "opacity-0"}`}
                  >
                    ▶ Trailer
                  </button>

                  {/* Floating Rating Badge */}
                  {item.vote_average && (
                    <span className="absolute top-2 right-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xs font-bold text-yellow-400 shadow-md">
                      {(item.vote_average * 10).toFixed(0)}%
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
