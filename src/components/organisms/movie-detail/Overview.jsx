import React from "react";

const Overview = ({ overview }) => {
  return (
    <div className="">
      <p className="font-semibold text-2xl my-3">Overview</p>
      <p className="tracking-wide">{overview}</p>
    </div>
  );
};

export default Overview;
