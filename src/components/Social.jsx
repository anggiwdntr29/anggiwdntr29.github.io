import React from "react";

const Social = ({ icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="ring p-2 rounded-md transition-all duration-500 ease-in-out hover:bg-gray-400 hover:text-white hover:ring-white"
    >
      {icon}
    </a>
  );
};

export default Social;
