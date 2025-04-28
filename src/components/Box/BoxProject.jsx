import React from "react";
import { NavLink } from "react-router";
import ImageBackdrop from "../ImageBackdrop";
import Tag from "../Tag";

const BoxProject = ({ item }) => {
  return (
    <div className="relative group rounded-md overflow-hidden h-[320px] md:h-[460px] cursor-pointer">
      <NavLink to={`/my-work/${item.id}`}>
        <ImageBackdrop images={item.cover} />

        <div className="relative z-10 flex flex-col justify-end h-full p-4 md:p-6 text-white overflow-hidden">
          <div className="transform transition-all duration-500 group-hover:-translate-y-10">
            <h1 className="text-xl font-semibold md:text-2xl md:font-bold mb-2 inline-block relative group">
              <span>{item.title}</span>
              <span className="absolute left-0 bottom-0 h-0.5 bg-current w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </h1>
            <div className="flex gap-2 mb-1 flex-wrap">
              <Tag tags={item.tags} />
            </div>
            <p className="text-sm md:text-md font-roboto opacity-70 line-clamp-1">
              {item.subTitle}
            </p>
          </div>

          <button className="absolute bottom-4 right-4 md:right-6 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-white text-black px-4 py-2 text-sm rounded-md font-medium font-roboto">
            Learn More
          </button>
        </div>
      </NavLink>
    </div>
  );
};

export default BoxProject;
