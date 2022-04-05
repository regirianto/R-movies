import React from "react";
import { useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";
import Swipper from "../../atom/Swipper";

const Cast = () => {
  const IMG_URL = process.env.REACT_APP_IMG_URL;
  const { castMovie } = useSelector((state) => state);
  return (
    <div className="">
      <Swipper sm={3.3} md={4.3} lg={5.3}>
        {castMovie.map((cast) => (
          <SwiperSlide>
            <div className="">
              <img
                src={
                  cast.profile_path
                    ? `${IMG_URL}/${cast.profile_path}`
                    : "/img/avatar.png"
                }
                className="w-[100px] h-[100px] rounded-full object-cover m-auto"
                alt=""
              />
              <p className="mt-1 text-center">{cast.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swipper>
    </div>
  );
};

export default Cast;
