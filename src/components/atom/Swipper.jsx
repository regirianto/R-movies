import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode } from "swiper";
import { Swiper } from "swiper/react";
const Swipper = ({
  children,
  sm = "auto",
  md = "auto",
  lg = "auto",
  space = 2,
}) => {
  return (
    <Swiper
      grabCursor
      slidesPerView={sm}
      spaceBetween={space}
      freeMode={true}
      modules={[FreeMode]}
      className="items-center"
      breakpoints={{
        640: {
          slidesPerView: md,
        },
        1024: {
          slidesPerView: lg,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default Swipper;
