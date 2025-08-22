import React from "react";
import { Tv, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const SideBar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navLinks = [
    { label: "Trending", path: "/trending" },
    { label: "Popular", path: "/popular" },
    { label: "Movies", path: "/movies" },
    { label: "TV Shows", path: "/tv" },
    { label: "People", path: "/people" },
  ];

  const infoLinks = [
    { label: "About MovieDB", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <React.Fragment>
      {isOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-40 bg-black lg:hidden"
          onClick={onClose}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onClose();
          }}
        />
      )}

      <aside
        className={`bg-gradient fixed top-0 left-0 z-50 flex h-full w-72 transform flex-col border-r shadow-xl backdrop-blur-lg transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        aria-label="Movie sidebar"
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-gray-800 px-6">
          <h1 className="flex items-center gap-2 text-xl font-extrabold text-white">
            <Tv className="text-[#6565cd]" />
            <span>MovieDB</span>
          </h1>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-blue-500 lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-6">
          <div className="mb-4">
            <h2 className="border-b border-gray-700 pb-2 text-sm font-semibold tracking-wide text-gray-400 uppercase">
              New Feeds
            </h2>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className={`rounded-md px-4 py-2 font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-700"></div>

          <div className="mb-4">
            <h2 className="border-b border-gray-700 pb-2 text-sm font-semibold tracking-wide text-gray-400 uppercase">
              Website Information
            </h2>
          </div>

          <div className="flex flex-col space-y-2">
            {infoLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className={`rounded-md px-4 py-2 font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </aside>
    </React.Fragment>
  );
};

export default SideBar;
