import React from "react";
import NumberFormat from "react-number-format";
import moment from "moment";

const Detail = ({ status, releaseDate, budget, revenue }) => {
  return (
    <div className="md:w-4/12 flex flex-col w-full p-5 gap-4 justify-evenly">
      <div>
        <p className="font-semibold text-lg mb-1">Status</p>
        <p>{status}</p>
      </div>
      <div>
        <p className="font-semibold text-lg mb-1">Release Date</p>
        <p>{moment(releaseDate).format("MMMM DD YYYY")}</p>
      </div>
      <div>
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
      <div>
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
