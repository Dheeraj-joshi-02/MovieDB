import React, { useState } from "react";
import NoImage from "../../assets/No-image.png";
import theme from "../../config/theme";

const HorizontalCards = ({ data }) => {
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
      {/* Horizontal scrollable cards */}
      <div className="scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 flex gap-4 overflow-x-auto p-3">
        {data.map((item, id) => (
          <div
            key={id}
            className={`group relative flex-shrink-0 cursor-pointer overflow-hidden ${theme.radius.card} ${theme.colors.card} ${theme.transition.base} w-[75%] transform transition-transform duration-300 hover:scale-105 sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%]`}
            onMouseEnter={() => setHoveredItem(id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Poster with hover overlay */}
            <div className="relative h-48 w-full overflow-hidden sm:h-56 md:h-64">
              <img
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
                className={`h-full w-full object-cover ${theme.transition.img} ${hoveredItem === id ? "scale-110" : ""}`}
              />

              {/* Hover Overlay with description */}
              <div
                className={`absolute inset-0 flex flex-col justify-end bg-black/70 p-3 opacity-0 group-hover:opacity-100 ${theme.transition.overlay}`}
              >
                <p className={`mb-2 line-clamp-4 text-sm text-white`}>
                  {item.overview || "No description available."}
                </p>
                <button
                  className={`${theme.colors.primary} w-full rounded-md px-3 py-2 text-xs text-white transition-all duration-200 hover:brightness-110 ${theme.radius.button}`}
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Content */}
            <div className={`${theme.colors.primaryBackground} p-3`}>
              {/* Title */}
              <h2
                className={`line-clamp-1 text-base font-bold md:text-lg ${theme.colors.text.heading}`}
              >
                {item.name ||
                  item.title ||
                  item.original_name ||
                  item.original_title}
              </h2>

              {/* Release Date + Language */}
              <div
                className={`flex items-center justify-between text-xs ${theme.colors.text.muted}`}
              >
                <span>
                  🗓️ {formatYear(item.release_date || item.first_air_date)}
                </span>
                {item.original_language && (
                  <span className="uppercase">🌍 {item.original_language}</span>
                )}
              </div>

              {/* Rating + Popularity */}
              <div className="flex items-center justify-between">
                {item.vote_average && (
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-bold ${getRatingColor(item.vote_average)}`}
                    >
                      ⭐ {item.vote_average.toFixed(1)}
                    </span>
                    <span className={`text-xs ${theme.colors.text.muted}`}>
                      🔥({item.vote_count})
                    </span>
                  </div>
                )}

                {/* Watch trailer button - only show on hover */}
                <button
                  className={`text-xs ${theme.colors.card} rounded px-2 py-1 text-white transition-opacity duration-200 ${theme.radius.button} ${hoveredItem === id ? "opacity-100" : "opacity-0"}`}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
