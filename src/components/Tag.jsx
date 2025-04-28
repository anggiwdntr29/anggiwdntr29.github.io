import React from "react";

const Tag = ({ tags }) => {
  return (
    <>
      {tags.map((item, index) => (
        <div
          key={index}
          className="flex gap-2 items-center justify-center bg-night dark:bg-white px-4 py-2 rounded-md transition-all duration-500 ease-in-out"
        >
          <h1 className="text-sm font-medium md:text-md md:font-semibold text-white dark:text-black transition-all duration-500 ease-in-out">
            {item}
          </h1>
        </div>
      ))}
    </>
  );
};

export default Tag;
