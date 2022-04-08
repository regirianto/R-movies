import { Pagination } from "@mui/material";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CardSm from "../components/atom/CardSm";
import LoadingScreen from "../components/atom/LoadingScreen";
import Navbar from "../components/organisms/navbar";
import { setSearchMovie } from "../config/redux/action/movieActions";
import { SET_PAGE } from "../config/redux/action/type";

const Movie = () => {
  const IMG_URL = process.env.REACT_APP_IMG_URL;
  const [searchParams] = useSearchParams();
  const { searchMovie, page } = useSelector((state) => state);
  const movies = searchMovie.results;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchMovie(searchParams.get("query"), page));
  }, [page, searchParams]);

  const changePage = (event, value) => {
    dispatch({ type: SET_PAGE, value });
  };

  if (!searchMovie.hasOwnProperty("results")) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Navbar />

      <div className="px-12 flex flex-wrap justify-evenly gap-2 mt-28">
        {movies.map((movie) => (
          <CardSm
            key={movie.id}
            id={movie.id}
            title={movie.title}
            img={
              movie.poster_path
                ? `${IMG_URL}/${movie.poster_path}`
                : "https://via.placeholder.com/300"
            }
            addClassName={"max-w-[300px]"}
            rating={movie.vote_average}
            totalUserRating={movie.vote_count}
            language={movie.original_language.toUpperCase()}
            release={moment(movie.release_date).format("MMMM DD YYYY")}
          />
        ))}
      </div>
      <div className="flex justify-center my-24">
        <Pagination
          color="primary"
          page={page}
          count={searchMovie.total_pages}
          onChange={changePage}
        />
      </div>
    </div>
  );
};

export default Movie;
