import React, { useState } from "react";
import BoxProject from "../components/Box/BoxProject";
import { DataProject } from "../Data";
import { Pagination } from "../components";

const MyWork = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = DataProject.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(DataProject.length / postsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div>
        <h1 className="font-montserrat text-xl md:text-3xl font-semibold md:mt-5 md:mb-2">
          My Work
        </h1>
        <h2 className="font-montserrat font-medium text-justify text-md md:text-xl text-gray-500 leading-relaxed mb-5">
          A showcase of my work, including professional projects, personal
          initiatives, and academic assignments.
        </h2>
      </div>

      <div className="space-y-10">
        {currentPosts.map((item) => (
          <BoxProject item={item} key={item.id} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        indexOfFirstPost={indexOfFirstPost}
        indexOfLastPost={indexOfLastPost}
        DataProject={DataProject}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
      />
    </div>
  );
};

export default MyWork;
