import React from "react";
import { useParams } from "react-router";
import { DataProject } from "../Data";
import { ImageBackdrop, Tag } from "../components";

const DetailProject = () => {
  const { id } = useParams();

  const item = DataProject.find((item) => item.id.toString() === id);

  return (
    <div
      key={item.id}
      className="dark:text-white transition-all duration-500 ease-in-out"
    >
      <div className="ring-2 p-4 space-y-6 rounded-md mt-6">
        <h1 className="font-montserrat font-semibold text-3xl ">
          {item.title}
        </h1>
        <div className="flex gap-4">
          <Tag tags={item.tags} />
        </div>
        <h1 className="font-roboto dark:text-gray-400 text-gray-500 font-medium text-lg">
          {item.subTitle}
        </h1>
      </div>
      <p className="text-justify leading-relaxed font-roboto my-10 text-lg">
        {item.description}
      </p>
      <div className="space-y-8 ">
        {item.images.map((image, index) => (
          <div key={index} className="rounded overflow-hidden ring-2 ">
            <img loading="lazy" src={image} alt={""} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailProject;
