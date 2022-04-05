import React from "react";
import { useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";
import CardSm from "../../atom/CardSm";
import Swipper from "../../atom/Swipper";
const CardCategory = () => {
  const URL_IMG = process.env.REACT_APP_IMG_URL;
  const { categoryMovies } = useSelector((state) => state);

  return (
    <div className="mt-14">
      <Swipper sm={2.2} md={3.5} lg={5.4} space={25}>
        {categoryMovies.length > 0 ? (
          categoryMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <CardSm
                title={movie.title}
                img={`${URL_IMG}/${movie.poster_path}`}
                id={movie.id}
                language={movie.original_language}
                rating={movie.vote_average}
                release={movie.release_date}
                totalUserRating={movie.vote_count}
              />
            </SwiperSlide>
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </Swipper>
    </div>
  );
};

export default CardCategory;
