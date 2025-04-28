import React from "react";

const Tag = ({ tags }) => {
  return (
    <>
      {tags.map((item, index) => (
        <div
          key={index}
          className="flex gap-2 items-center justify-center bg-gray-700 px-4 py-2 rounded-md"
        >
          <h1 className="text-sm font-medium md:text-md md:font-semibold">
            {item}
          </h1>
        </div>
      ))}
    </>
  );
};

export default Tag;
