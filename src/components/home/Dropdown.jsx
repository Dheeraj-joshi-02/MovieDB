import { ChevronDown } from "lucide-react";
import React from "react";

const CustomDropdown = ({ title, options, func }) => {
  return (
    <div className="relative w-64">
      <select
        onChange={func}
        defaultValue={0}
        name="format"
        id="format"
        className="w-full appearance-none rounded-lg border border-gray-600 bg-gray-900 text-white px-4 py-3 pr-10 text-sm sm:text-base cursor-pointer
        focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
      >
        <option value={0} disabled>
          {title}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
        <ChevronDown />
      </div>
    </div>
  );
};

export default CustomDropdown;
