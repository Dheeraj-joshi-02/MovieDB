import { Megaphone, Tv2 } from "lucide-react";
import React from "react";
import theme from "../../config/theme";

const Display = ({ data }) => {
  return (
    <React.Fragment>
      {data && (
        <div
          style={{
            backgroundImage: `${theme.display.gradient}, url(https://image.tmdb.org/t/p/original/${
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
            <h1 className={theme.display.text.title}>
              {data.name ||
                data.title ||
                data.original_name ||
                data.original_title}
            </h1>

            {/* Overview */}
            <p
              className={`mt-3 line-clamp-3 ${theme.display.text.overview} sm:mt-4 sm:line-clamp-4 lg:line-clamp-none`}
            >
              {data.overview?.split(" ").slice(0, 12).join(" ")}....
            </p>

            {/* Meta info */}
            <div className="mt-4 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-5">
              <p
                className={`flex items-center gap-2 ${theme.display.text.accent}`}
              >
                <Megaphone className="h-4 w-4 sm:h-5 sm:w-5" />
                {data.release_date ? data.release_date : "No information"}
              </p>
              <p
                className={`flex items-center gap-2 ${theme.display.text.meta}`}
              >
                <Tv2 className="h-4 w-4 sm:h-5 sm:w-5" />
                {data.media_type || "Unknown"}
              </p>
            </div>

            {/* Button */}
            <button
              className={`${theme.display.button.base} ${theme.display.button.gradient}`}
            >
              Watch Trailer
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Display;
