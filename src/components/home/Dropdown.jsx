import { ChevronDown } from "lucide-react";
import React from "react";

const Dropdown = ({ title, options, func, className }) => {
  return (
    <React.Fragment>
      <div className={`relative w-56 ${className}`}>
        <select
          onChange={func}
          defaultValue={0}
          name="format"
          options
          id="format"
          className="w-full cursor-pointer appearance-none rounded-lg border border-gray-600 bg-gray-900 px-4 py-3 pr-10 text-sm text-white transition focus:border-[#6565cd] focus:ring-1 focus:ring-[#6565cd] focus:outline-none sm:text-base"
        >
          <option value={0} hidden>
            {title}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
          <ChevronDown />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dropdown;
