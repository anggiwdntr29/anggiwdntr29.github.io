import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  indexOfFirstPost,
  indexOfLastPost,
  DataProject,
  goToPreviousPage,
  goToNextPage,
}) => {
  return (
    <div className="font-roboto flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-center mt-auto py-4">
      <div className="text-sm md:text-md font-medium">
        Showing {indexOfFirstPost + 1} - {""}
        {Math.min(indexOfLastPost, DataProject.length)} of {DataProject.length}{" "}
        posts
      </div>

      <div className="flex md:space-x-2 w-full md:w-auto justify-between items-center">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`w-16 md:w-24 py-2 rounded text-xs md:text-md font-medium ${
            currentPage === 1
              ? "ring cursor-not-allowed"
              : "bg-black text-white cursor-pointer"
          }`}
        >
          Previous
        </button>

        <div className="flex items-center px-4 text-sm md:text-md font-medium">
          Page {currentPage} of {totalPages}
        </div>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`w-16 md:w-24 py-2 rounded text-xs md:text-md font-medium ${
            currentPage === totalPages
              ? "ring cursor-not-allowed"
              : "bg-black text-white cursor-pointer"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
