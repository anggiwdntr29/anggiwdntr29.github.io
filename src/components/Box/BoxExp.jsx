import React from "react";

const BoxExp = ({ item }) => {
  return (
    <div className="group flex flex-col md:flex-row md:gap-4 items-start hover:p-4 border border-transparent dark:hover:border-white hover:border-black rounded-lg transition-all duration-300 cursor-default">
      <h1 className="font-roboto font-medium text-sm md:text-lg text-gray-500">
        {item.date}
      </h1>
      <div className="flex-1">
        <h1 className="font-montserrat font-semibold text-xl md:text-2xl">
          {item.title}
        </h1>
        <h1 className="font-montserrat md:text-lg font-medium text-gray-500">
          {item.company}
        </h1>
        <p className="text-justify text-sm md:text-lg font-roboto leading-6 md:leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default BoxExp;
