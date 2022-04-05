import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";
import { setOnTrendingMovies } from "../../../config/redux/action/movieActions";
import { getOnTrendingMovies } from "../../../services/moviesAPI";
import moment from "moment";
import CardSm from "../../atom/CardSm";
import Swipper from "../../atom/Swipper";
import MovieSection from "../../molecule/MovieSection";

const TrendingMovies = () => {
  const dispatch = useDispatch();
  const { onTrendingMovies } = useSelector((state) => state);
  useEffect(() => {
    dispatch(setOnTrendingMovies());
  }, []);
  return (
    <MovieSection title="Trending Movies">
      <Swipper sm={2.2} md={3.5} lg={5.4} space={25}>
        {onTrendingMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <CardSm
              id={movie.id}
              title={movie.title}
              release={moment(movie.release_date).format("MMMM DD YYYY")}
              rating={movie.vote_average}
              totalUserRating={movie.vote_count}
              img={`${process.env.REACT_APP_IMG_URL}/${movie.poster_path}`}
              language={movie.original_language.toUpperCase()}
            />
          </SwiperSlide>
        ))}
      </Swipper>
    </MovieSection>
  );
};

export default TrendingMovies;
