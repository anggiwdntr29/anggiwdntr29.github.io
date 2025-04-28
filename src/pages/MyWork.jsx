import React, { useEffect } from "react";
import BoxProject from "../components/Box/BoxProject";
import { DataProject } from "../Data";
import { Pagination } from "../components";
import { useSearchParams } from "react-router";

const MyWork = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");

  const postsPerPage = 3;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = DataProject.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(DataProject.length / postsPerPage);

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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <div className="dark:text-white">
      <div>
        <h1 className="font-montserrat text-xl md:text-3xl font-semibold md:mt-5 md:mb-2">
          My Work
        </h1>
        <h2 className="font-montserrat font-medium text-justify text-md md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
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
