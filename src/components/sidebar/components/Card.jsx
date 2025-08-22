import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, title }) => {
  return (
    <React.Fragment>
      <div className="w-full p-4 sm:p-6 md:p-8">
        <div className="scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 flex gap-4 overflow-x-auto pb-3">
          {/* {data.map((item, idx) => (
            <Link key={idx}>
              <img src="" alt="" />
              {item.name ||
                item.title ||
                item.original_name ||
                item.original_title}
            </Link>
          ))} */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
