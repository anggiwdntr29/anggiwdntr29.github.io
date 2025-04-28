import React from "react";
import { DataBlogs } from "../Data";
import { BoxPost, Pagination } from "../components";
import { useSearchParams } from "react-router";

const Post = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");

  const postsPerPage = 5;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = DataBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(DataBlogs.length / postsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: (currentPage + 1).toString() });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setSearchParams({ page: (currentPage - 1).toString() });
    }
  };

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="font-montserrat text-xl md:text-3xl font-semibold md:mt-5 md:mb-2">
          Posts
        </h1>
        <h2 className="font-montserrat font-medium text-justify text-md md:text-xl text-gray-500 leading-relaxed mb-5">
          A collection of posts from my blog, where I share insights on web and
          mobile development.
        </h2>
      </div>

      <div className="space-y-4 ">
        {currentPosts.map((item, index) => (
          <BoxPost key={index} item={item} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        indexOfFirstPost={indexOfFirstPost}
        indexOfLastPost={indexOfLastPost}
        DataProject={DataBlogs}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
      />
    </div>
  );
};

export default Post;
