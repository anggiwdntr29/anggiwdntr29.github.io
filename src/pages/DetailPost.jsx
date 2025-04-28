import React from "react";
import { useParams } from "react-router";
import { DataBlogs } from "../Data";

const DetailPost = () => {
  const { id } = useParams();

  const item = DataBlogs.find((item) => item.id.toString() === id);

  return (
    <div className="mt-5 text-justify">
      {item ? (
        <>
          <h1 className="font-montserrat text-3xl font-semibold">
            {item.title}
          </h1>
          <h1 className="font-roboto font-medium text-lg text-gray-500 mb-1">
            {item.date}
          </h1>
          <p className="font-normal text-xl leading-relaxed mb-1.5">
            {item.subTitle}
          </p>
          <p className="font-normal text-xl leading-relaxed mb-1.5 indent-12">
            {item.paragraf_1}
          </p>
          <p className="font-normal text-xl leading-relaxed mb-1.5 indent-12">
            {item.paragraf_2}
          </p>
          <p className="font-normal text-xl leading-relaxed mb-1.5 indent-12">
            {item.paragraf_3}
          </p>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default DetailPost;
