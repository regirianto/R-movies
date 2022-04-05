import { CircularProgress } from "@mui/material";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";
import { setNowPlayingMovies } from "../../../config/redux/action/movieActions";
import CardLg from "../../atom/CardLg";
import LoadingScreen from "../../atom/LoadingScreen";
import Swipper from "../../atom/Swipper";
import MovieSection from "../../molecule/MovieSection";

const OnPlaying = () => {
  const { nowPlayingMovies } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNowPlayingMovies());
  }, []);

  return (
    <>
      <MovieSection title="Now Playing">
        <Swipper sm={1.2} md={2.2} lg={3.2} space={15}>
          {nowPlayingMovies.length > 0 ? (
            nowPlayingMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <CardLg
                  id={movie.id}
                  title={movie.title}
                  rating={movie.vote_average}
                  year={moment(movie.release_date).format("MMMM DD YYYY")}
                  ratingCount={movie.vote_count}
                  img={`${process.env.REACT_APP_IMG_URL}/${movie.backdrop_path}`}
                  language={movie.original_language.toUpperCase()}
                />
              </SwiperSlide>
            ))
          ) : (
            <CircularProgress />
          )}
        </Swipper>
      </MovieSection>
    </>
  );
};

export default OnPlaying;
