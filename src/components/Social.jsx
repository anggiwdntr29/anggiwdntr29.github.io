import React from "react";

const Social = ({ icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="ring p-2 rounded-md transition-all duration-500 ease-in-out hover:bg-night hover:text-white hover:ring-white dark:text-white dark:hover:bg-white dark:hover:text-night dark:hover:ring-night"
    >
      {icon}
    </a>
  );
};

export default Social;
