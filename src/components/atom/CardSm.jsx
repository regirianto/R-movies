import { Star } from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";
import { Link } from "react-router-dom";

const CardSm = ({
  title,
  release,
  rating,
  img,
  totalUserRating,
  language,
  id,
  wImg,
}) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="overflow-hidden">
        <div className="">
          <img src={img} className="rounded-2xl " width={wImg} alt="" />
        </div>
        <div className="font-light text-sm p-2  ">
          <p className="text-xl font-semibold my-1">{title}</p>
          <div className="flex md:flex-row flex-col justify-between">
            <div className="">
              <p className="my-1">{release}</p>
              <p className="flex items-center gap-1">
                <Star color="warning" /> {rating} ({totalUserRating})
              </p>
            </div>
            <div className="">
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
