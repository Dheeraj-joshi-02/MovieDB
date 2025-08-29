import React from "react";
import theme from "../../config/theme";
import { ArrowLeft } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

const About = () => {
  const Navigate = useNavigate();

  return (
    <React.Fragment>
      <div
        className={`min-h-screen ${theme.colors.background} px-4 sm:px-6 lg:px-8`}
      >
        <div>
          <div className="flex w-full flex-col items-start justify-between gap-4 border-b border-gray-800 p-4 sm:flex-row sm:items-center sm:p-[2%]">
            {/* Left Heading */}
            <h1 className="flex items-center gap-2 text-xl font-bold text-white sm:text-2xl">
              <ArrowLeft
                onClick={() => Navigate(-1)}
                className="cursor-pointer hover:text-[#6565cd]"
              />
              About
            </h1>
          </div>
        </div>

        <div className="mx-auto mt-5 max-w-4xl">
          <div
            className={`${theme.colors.card} ${theme.radius.card} p-6 backdrop-blur-lg md:p-8`}
          >
            <h1
              className={`mb-6 text-3xl font-bold md:text-4xl ${theme.colors.text.heading}`}
            >
              About{" "}
              <span
                className={`${theme.colors.primary} bg-clip-text text-transparent`}
              >
                MovieDB
              </span>
            </h1>

            <div className="space-y-6">
              <p className={`text-lg ${theme.colors.text.sub}`}>
                Welcome to MovieDB, your ultimate destination for discovering,
                exploring, and tracking movies and TV shows from around the
                world.
              </p>

              <p className={theme.colors.text.muted}>
                We're passionate about cinema and television, and we've built a
                platform that helps fans like you find your next favorite show,
                keep track of what you've watched, and discover hidden gems
                across all genres and eras.
              </p>

              <div className={`p-4 ${theme.radius.card} mt-6 bg-gray-800/50`}>
                <h2
                  className={`mb-3 text-xl font-semibold ${theme.colors.text.heading}`}
                >
                  What We Offer
                </h2>
                <ul
                  className={`space-y-2 ${theme.colors.text.muted} list-inside list-disc`}
                >
                  <li>Comprehensive database of movies and TV shows</li>
                  <li>Trending and popular content updated daily</li>
                  <li>
                    Detailed information including cast, crew, and reviews
                  </li>
                  <li>
                    Personalized recommendations based on your preferences
                  </li>
                  <li>Trailers and media content for most titles</li>
                </ul>
              </div>

              <p className={theme.colors.text.muted}>
                Our mission is to create the most comprehensive and
                user-friendly movie database that serves both casual viewers and
                hardcore cinephiles alike. We continuously update our database
                and improve our features to provide the best experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div
                  className={`min-w-[200px] flex-1 p-4 ${theme.radius.card} bg-gray-800/50`}
                >
                  <h3 className={`mb-2 font-bold ${theme.colors.accent}`}>
                    10,000+
                  </h3>
                  <p className={theme.colors.text.muted}>Movies & Shows</p>
                </div>
                <div
                  className={`min-w-[200px] flex-1 p-4 ${theme.radius.card} bg-gray-800/50`}
                >
                  <h3 className={`mb-2 font-bold ${theme.colors.accent}`}>
                    24/7
                  </h3>
                  <p className={theme.colors.text.muted}>Updated Content</p>
                </div>
                <div
                  className={`min-w-[200px] flex-1 p-4 ${theme.radius.card} bg-gray-800/50`}
                >
                  <h3 className={`mb-2 font-bold ${theme.colors.accent}`}>
                    Worldwide
                  </h3>
                  <p className={theme.colors.text.muted}>Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
