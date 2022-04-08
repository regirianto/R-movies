import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";
import CardLg from "../../atom/CardLg";
import Swipper from "../../atom/Swipper";
import MovieSection from "../../molecule/MovieSection";

const RecommendationMovies = () => {
  const IMG_URL = process.env.REACT_APP_IMG_URL;

  const { similarMovies } = useSelector((state) => state);
  return (
    <div>
      <MovieSection title="Recommendations Movies">
        <Swipper sm={1.2} md={2.2} lg={3.2} space={15}>
          {similarMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <CardLg
                id={movie.id}
                img={`${IMG_URL}/${movie.backdrop_path}`}
                title={movie.title}
                language={movie.original_language.toUpperCase()}
                rating={movie.vote_average}
                ratingCount={movie.vote_count}
                year={moment(movie.release_date).format("MMMM DD YYYY")}
              />
            </SwiperSlide>
          ))}
        </Swipper>
      </MovieSection>
    </div>
  );
};

export default RecommendationMovies;
