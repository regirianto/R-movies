import React from "react";
import NumberFormat from "react-number-format";
import moment from "moment";

const Detail = ({ status, releaseDate, budget, revenue }) => {
  return (
    <div className="md:w-4/12 flex md:flex-col flex-row w-full p-5 gap-4 justify-evenly md:text-left text-center">
      <div className="">
        <p className="font-semibold text-lg mb-1">Status</p>
        <p>{status}</p>
      </div>
      <div className="">
        <p className="font-semibold text-lg mb-1">Release Date</p>
        <p>{moment(releaseDate).format("MMMM DD YYYY")}</p>
      </div>
      <div className="">
        <p className="font-semibold text-lg mb-1">Budget </p>
        <p>
          {
            <NumberFormat
              displayType="text"
              value={budget}
              prefix="$ "
              thousandSeparator
            />
          }
        </p>
      </div>
      <div className="">
        <p className="font-semibold text-lg mb-1">Revenue</p>
        <p>
          {
            <NumberFormat
              displayType="text"
              value={revenue}
              thousandSeparator
              prefix="$ "
            />
          }
        </p>
      </div>
    </div>
  );
};

export default Detail;
