import { Star } from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

const CardSm = ({
  title,
  release,
  rating,
  img,
  totalUserRating,
  language,
  id,
  addClassName,
}) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className={`overflow-hidden ${addClassName}`}>
        <div>
          <img src={img} className="rounded-2xl " alt="" />
        </div>
        <div className="font-light text-sm p-2  ">
          <p className="text-xl font-semibold my-1 truncate">{title}</p>
          <div className="flex md:flex-row flex-col justify-between">
            <div>
              <p className="my-1">{release}</p>
              <p className="flex items-center gap-1">
                <Star color="warning" /> {rating} (
                {<NumberFormat displayType="text" value={totalUserRating} />})
              </p>
            </div>
            <div>
              <p className="text-sm flex items-center gap-1">
                <LanguageIcon /> {language}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardSm;
