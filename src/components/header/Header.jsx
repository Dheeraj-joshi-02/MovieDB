import { Menu, PlusIcon, Search } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ onMenuClick }) => {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <React.Fragment>
      <header className="sticky top-0 z-30">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left section */}
            <div className="flex items-center gap-4">
              <button
                onClick={onMenuClick}
                className="rounded-lg p-2 text-white transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none lg:hidden cursor-pointer"
                aria-label="Open sidebar menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

            {/* Search section */}
            <div className="w-full max-w-[720px] h-full relative flex items-center justify-center px-2">
              <Search className="absolute left-5 h-5 w-5 text-zinc-400 text-3xl" />
              <input
                onChange={(event) => setQuery(event.target.value)}
                value={query}
                type="search"
                className="border-1 border-zinc-300 w-full px-5 py-2 rounded-lg text-white outline-0 ::placeholder:text-zinc-400 pl-10  bg-transparent "
                placeholder="Search for a movies, tv show, and person...."
              />
              {query.length > 0 && (
                <PlusIcon
                  onClick={() => setQuery("")}
                  className="absolute right-5 h-5 w-5 text-zinc-400 text-3xl rotate-45 cursor-pointer"
                />
              )}

              {/* <div className="absolute -bottom-3 top-[85%] left-0 right-0 bg-red-50 h-[50vh] w-[98%] mx-auto rounded-lg text-gray-600 overflow-y-scroll">
                <NavLink className="w-full py-2 pl-2 flex justify-start items-center gap-5 font-semibold border-b-2 border-gray-200 hover:text-black hover:bg-zinc-300 duration-500 rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1553562999-1e20feada94c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcm5zdGFyfGVufDB8fDB8fHww"
                    alt="img"
                    width={150}
                    className="rounded-md"
                  />
                  <span>Hello everyone</span>
                </NavLink>
              </div> */}
            </div>

            {/* Right section*/}
            <div className="flex items-center gap-2">
              <div className="ml-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-medium text-white">
                  <span className="cursor-pointer">DJ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;
