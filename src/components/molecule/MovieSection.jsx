import React from "react";

const MovieSection = ({ title, children }) => {
  return (
    <div className="my-20 px-5">
      <div className=" my-4">
        <p className="text-3xl font-semibold">{title}</p>
      </div>
      {children}
    </div>
  );
};

export default MovieSection;
