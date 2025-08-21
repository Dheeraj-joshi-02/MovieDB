import { Tv, X } from "lucide-react";
import React from "react";
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
    <>
      {isOpen && (
        <div
          className="bg-black bg-opacity-50 fixed inset-0 z-40 lg:hidden"
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
        className={`fixed top-0 left-0 z-50 flex h-full w-72 transform flex-col shadow-xl transition-transform duration-300 ease-in-out
        backdrop-blur-lg bg-gradient-to-b from-gray-900/95 to-black/95 border-r border-gray-800
        lg:static lg:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        aria-label="Movie sidebar"
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between px-6 border-b border-gray-800">
          <h1 className="flex gap-2 items-center text-xl font-extrabold text-white">
            <Tv className="text-blue-500" />
            <span>MovieDB</span>
          </h1>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:ring-2 focus:ring-blue-500 lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-6 flex-1 overflow-y-auto">
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide border-b border-gray-700 pb-2">
              New Feeds
            </h2>
          </div>

          <div className="space-y-2 flex flex-col">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className={`rounded-md px-4 py-2 font-medium transition-all duration-300
                ${
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
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide border-b border-gray-700 pb-2">
              Website Information
            </h2>
          </div>

          <div className="space-y-2 flex flex-col">
            {infoLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className={`rounded-md px-4 py-2 font-medium transition-all duration-300
                ${
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
    </>
  );
};

export default SideBar;
