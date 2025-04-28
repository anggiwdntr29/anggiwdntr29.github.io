import React from "react";

const ImageBackdrop = ({ images }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${images})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
    </div>
  );
};

export default ImageBackdrop;
