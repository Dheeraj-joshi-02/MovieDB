import { Tv, X } from "lucide-react";
import React from "react";

const SideBar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-50 bg-black lg:hidden"
          onClick={onClose}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onClose();
            }
          }}
        />
      )}
      <aside
        className={`fixed top-0 left-0 z-50 flex h-full w-72 transform flex-col shadow-lg transition-transform duration-300 border-r-1 border-gray-200   ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        aria-label="Movie sidebar"
      >
        <div className="flex h-16 items-center justify-between px-6">
          <h1 className="flex gap-2 items-center text-2xl text-white font-bold">
            <Tv />
            <span>MovieDB</span>
          </h1>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-white cursor-pointer transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-6">
          <div className="mb-6 flex items-center gap-2">
            <h1 className="text-lg font-medium text-white">New Feeds</h1>
          </div>

          <div className="space-y-2 flex flex-col">
            <a className="hover:bg-[#6E44FF] hover:text-white duration-500 rounded py-2 px-5 cursor-pointer text-white ">
              Trending
            </a>
            <a className="hover:bg-[#6E44FF] hover:text-white duration-500 rounded py-2 px-5 cursor-pointer text-white ">
              Popular
            </a>
            <a className="hover:bg-[#6E44FF] hover:text-white duration-500 rounded py-2 px-5 cursor-pointer text-white ">
              Movies
            </a>
            <a className="hover:bg-[#6E44FF] hover:text-white duration-500 rounded py-2 px-5 cursor-pointer text-white ">
              Tv Shows
            </a>
            <a className="hover:bg-[#6E44FF] hover:text-white duration-500 rounded py-2 px-5 cursor-pointer text-white ">
              People
            </a>
          </div>
        </nav>
        <hr />
        <nav className="p-6">
          <div className="mb-6 flex items-center gap-2">
            <h1 className="text-lg font-medium text-white">
              Website Information
            </h1>
          </div>

          <div className="space-y-2 flex flex-col">
            <a className="hover:bg-[#6E44FF] hover:text-white duration-500 rounded py-2 px-5 cursor-pointer text-white flex gap-2">
              About MovieDB
            </a>
            <a className="hover:bg-[#6E44FF] hover:text-white duration-500 rounded py-2 px-5 cursor-pointer text-white flex gap-2">
              Contact
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
