import React from "react";
import moment from "moment";
import { Star } from "@mui/icons-material";

const Header = ({
  background,
  img,
  rating,
  ratingCount,
  releaseDate,
  genres,
  title,
}) => {
  const IMG_URL = process.env.REACT_APP_IMG_URL;
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${IMG_URL}/${background})`,
        }}
        className="h-[100vh] w-screen bg-cover  relative bg-no-repeat after:contents-[''] after:w-full after:h-full after:absolute after:bg-gradient-to-t from-white bg-center "
      ></div>
      <div
        className="absolute md:bottom-2 md:left-16 flex  md:items-end items-center md:gap-10 gap-5
        bottom-0 left-0 right-0 md:bg-transparent bg-white py-5 rounded-t-[40px] md:p-0 px-12
      "
      >
        <img
          src={`${IMG_URL}/${img}`}
          className="md:w-[220px] w-[190px] rounded-2xl  "
          alt={title}
        />
        <div>
          <p className="md:text-5xl text-base font-semibold">{title}</p>
          <div className="flex items-center gap-1 md:text-base text-sm">
            <p>
              <Star color="warning" />
            </p>
            <p>
              {rating} ({ratingCount})
            </p>
          </div>
          <div className=" md:text-lg text-sm ">
            {moment({ releaseDate }).format("YYYY")}
            <ul className="flex flex-wrap md:gap-1">
              {genres.map((category) => (
                <li className="m-1 " key={category.id}>
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
