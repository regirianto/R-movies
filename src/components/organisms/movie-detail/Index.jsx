import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setCastMovie,
  setMovieID,
  setSimilarMovies,
} from "../../../config/redux/action/movieActions";
import LoadingScreen from "../../atom/LoadingScreen";
import Cast from "./Cast";
import Detail from "./Detail";
import Header from "./Header";
import Overview from "./Overview";
import RecommendationMovies from "./RecommendationMovies";

const MovieDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { movieID, castMovie } = useSelector((state) => state);
  useEffect(() => {
    dispatch(setMovieID(id));
    dispatch(setCastMovie(id));
    dispatch(setSimilarMovies(id));
  }, [id]);

  if (movieID.id !== Number(id) || castMovie.length === 0)
    return <LoadingScreen />;
  return (
    <div>
      <Header
        title={movieID.title}
        releaseDate={movieID.release_date}
        img={movieID.poster_path}
        background={movieID.backdrop_path}
        rating={movieID.vote_average}
        ratingCount={movieID.vote_count}
        genres={movieID.genres}
      />
      <div className="flex px-10 md:flex-row flex-col-reverse  ">
        <div className="md:w-8/12 w-full flex flex-col gap-10">
          <Overview overview={movieID.overview} />
          <Cast />
        </div>

        <Detail
          status={movieID.status}
          releaseDate={movieID.release_date}
          budget={movieID.budget}
          revenue={movieID.revenue}
        />
      </div>
      <RecommendationMovies />
    </div>
  );
};

export default MovieDetail;
