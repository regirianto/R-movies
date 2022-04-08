import React from "react";
import StarIcon from "@mui/icons-material/Star";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";

const NowPlayingCard = ({
  title,
  year,
  rating,
  ratingCount,
  img,
  language,
  id,
}) => {
  return (
    <Link to={`/movie/${id}`}>
      <div>
        <div>
          <img
            src={img}
            className="rounded-2xl w-[500px] object-cover"
            alt=""
          />
        </div>
        <div className="flex justify-between items-center p-2">
          <div>
            <p className="text-2xl font-semibold">{title}</p>
            <p className="text-sm font-light my-1">{year}</p>
            <p className="text-sm font-light flex items-center gap-1">
              <StarIcon color="warning" /> {rating} ({ratingCount})
            </p>
          </div>
          <div>
            <p className="text-sm flex items-center gap-1">
              <LanguageIcon /> {language}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NowPlayingCard;
