import React from "react";
import { NavLink } from "react-router";

const BoxPost = ({ item }) => {
  return (
    <NavLink to={`/post/${item.id}`} className="block group">
      <div className="group-hover:ring rounded-md group-hover:p-4 transition-all duration-300 ease-in-out cursor-pointer">
        <p className="font-roboto font-medium text-md md:text-lg dark:text-gray-400 text-gray-500 transition-colors duration-300">
          {item.date}
        </p>
        <h1 className="font-montserrat text-lg md:text-2xl font-medium md:mt-1 mb-1 md:mb-2 inline-block relative">
          <span>{item.title}</span>
          <span className="absolute left-0 bottom-0 h-0.5 bg-current w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </h1>
        <p className="font-roboto text-sm line-clamp-2 text-justify md:leading-relaxed dark:text-gray-400 text-gray-500 transition-colors duration-300">
          {item.subTitle}
        </p>
      </div>
    </NavLink>
  );
};

export default BoxPost;
