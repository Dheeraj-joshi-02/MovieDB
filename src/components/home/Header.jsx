import axios from "../../utils/Axios";
import { Menu, PlusIcon, Search, User } from "lucide-react";
import { useEffect, useState } from "react";
import NoImage from "../../assets/No-image.png";
import { Link } from "react-router-dom";
import React from "react";
import theme from "../../config/theme";

const Header = ({ onMenuClick }) => {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (!query) {
      setSearchData([]);
      return;
    }
    const getSearch = async () => {
      try {
        const { data } = await axios.get(`/search/multi?query=${query}`);
        setSearchData(data.results);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    let timer = setTimeout(() => {
      getSearch();
    }, 500); // debounce for smoother search

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <React.Fragment>
      <header className={theme.header.base}>
        <div className={theme.header.container}>
          <div className={theme.header.inner}>
            {/* Left section */}
            <div className="flex items-center gap-4">
              <button
                onClick={onMenuClick}
                aria-label="Open sidebar menu"
                className={theme.sidebar.header.closeButton}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

            {/* Search section */}
            <div className={theme.header.search.container}>
              <Search className={theme.header.search.icon} />
              <input
                onChange={(event) => setQuery(event.target.value)}
                value={query}
                type="text"
                className={`${theme.header.search.inputBase}`}
                placeholder="Search for movies, TV shows, or people.."
              />
              {query.length > 0 && (
                <PlusIcon
                  onClick={() => setQuery("")}
                  className={theme.header.search.inputClear}
                />
              )}

              {/* Dropdown search results */}
              {query.length > 0 && searchData.length > 0 && (
                <div className={theme.header.search.results.container}>
                  {searchData.map((item) => (
                    <Link
                      key={item.id}
                      to={`/${item.media_type}/${item.id}`}
                      className={theme.header.search.results.item}
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
                        className="h-14 w-14 rounded-md object-cover sm:h-20 sm:w-20"
                      />
                      <div className="flex flex-col">
                        <h5 className={theme.header.search.results.title}>
                          {item.name ||
                            item.title ||
                            item.original_name ||
                            item.original_title}
                        </h5>
                        <p className={theme.header.search.results.description}>
                          {item.overview || "No description available."}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Right section */}
            <div className="flex items-center gap-2">
              <div className={theme.header.userButton}>
                <User className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
