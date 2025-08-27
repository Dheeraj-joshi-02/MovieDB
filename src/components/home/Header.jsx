import axios from "../../utils/Axios";
import { Menu, PlusIcon, Search, User } from "lucide-react";
import { useEffect, useState } from "react";
import NoImage from "../../assets/No-image.png";
import { Link } from "react-router-dom";
import React from "react";

const Header = ({ onMenuClick }) => {
  const [query, setQuery] = useState("");
  const [searchData, setsearchData] = useState([]);

  useEffect(() => {
    if (!query) {
      setsearchData([]);
      return;
    }
    const getSearch = async () => {
      try {
        const { data } = await axios.get(`/search/multi?query=${query}`);
        setsearchData(data.results);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    let timer = setTimeout(() => {
      getSearch();
    });

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <React.Fragment>
      <header className="sticky top-0 z-30 border-r border-gray-800 backdrop-blur-lg">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left section */}
            <div className="flex items-center gap-4">
              <button
                onClick={onMenuClick}
                className="cursor-pointer rounded-lg p-2 text-white transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none lg:hidden"
                aria-label="Open sidebar menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

            {/* Search section */}
            <div className="relative flex h-full w-full max-w-[720px] items-center justify-center px-2">
              <Search className="absolute left-5 h-5 w-5 text-3xl text-zinc-400" />
              <input
                onChange={(event) => setQuery(event.target.value)}
                value={query}
                type="text"
                className="w-full rounded-lg border-1 border-zinc-300 bg-transparent px-5 py-2 pl-10 text-white outline-0 placeholder:text-zinc-400"
                placeholder="Search for a movies, tv show, and person...."
              />
              {query.length > 0 && (
                <PlusIcon
                  onClick={() => setQuery("")}
                  className="absolute right-5 h-5 w-5 rotate-45 cursor-pointer text-zinc-400"
                />
              )}
              {query.length > 0 && searchData.length > 0 && (
                <div className="absolute top-[85%] right-0 -bottom-3 left-0 mx-auto h-[50vh] w-[98%] overflow-y-scroll rounded-lg bg-red-50 text-gray-600">
                  {searchData.map((item) => (
                    <Link
                      key={item.id}
                      className="sm:gap flex w-full items-start justify-start gap-5 rounded-lg border-b-2 border-gray-200 p-2 font-semibold duration-500 hover:bg-zinc-300 hover:text-black sm:p-4"
                    >
                      <img
                        src={
                          item.backdrop_path || item.profile_path
                            ? `https://image.tmdb.org/t/p/w500/${
                                item.backdrop_path || item.profile_path
                              }`
                            : NoImage
                        }
                        alt="poster"
                        className="h-12 w-12 rounded-full object-cover sm:h-24 sm:w-24"
                      />
                      <div className="leading-snug">
                        <h5 className="line-clamp-1 text-sm font-medium sm:text-base md:text-lg">
                          {item.name ||
                            item.title ||
                            item.original_name ||
                            item.original_title}
                        </h5>
                        <p className="mt-1 line-clamp-2 text-xs text-gray-500 sm:text-sm md:text-sm">
                          {item.overview}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Right section*/}
            <div className="flex items-center gap-2">
              <div className="bg-btn-gradient flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white">
                <span className="cursor-pointer">
                  <User className="h-5 w-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;
