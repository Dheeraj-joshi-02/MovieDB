import { ChevronDown } from "lucide-react";
import React from "react";
import theme from "../../config/theme";

const Dropdown = ({ title, options, func, className }) => {
  return (
    <React.Fragment>
      <div className={`relative w-44 ${className}`}>
        <select
          onChange={func}
          defaultValue=""
          name="format"
          id="format"
          aria-label={title}
          className={theme.dropdown.select.default}
        >
          <option value="" hidden>
            {title}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
        <div className={`${theme.dropdown.icon}`}>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dropdown;
