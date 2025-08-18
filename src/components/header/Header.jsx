import { Menu, Moon, Sun } from "lucide-react";
import React, { useState } from "react";

const Header = ({ onMenuClick }) => {
  const [Icon, setIcon] = useState(<Sun />);

  return (
    <header className="sticky top-0 z-30 border-b border-gray-50">
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
          <div className="w-2/4">
            <input
              type="search"
              className="border-1 border-gray-300 w-full px-5 py-2 rounded-lg text-white"
              placeholder="Search movies"
            />
          </div>

          {/* Right section*/}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIcon(<Moon />)}
              className="cursor-pointer rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              aria-label="Notifications"
            >
              {Icon}
            </button>
            <div className="ml-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-medium text-white">
                <span className="cursor-pointer">DJ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
