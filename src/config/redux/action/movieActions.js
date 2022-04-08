import {
  getCategoryIdMovies,
  getNowPlayingMovies,
  getOnTrendingMovies,
  getMovieByid,
  getCastMovies,
  getSimilarMovies,
  getMoviesByCategory,
  getMoviesBykeyword,
} from "../../../services/moviesAPI";
import {
  SET_CATEGORY_ID,
  SET_MOVIES_TRENDING,
  SET_NOW_PLAYING_MOVIES,
  SET_MOVIE_ID,
  SET_CAST_MOVIE,
  SET_SIMILIAR_MOVIES,
  SET_CATEGORY_MOVIES,
  SET_SEARCH_MOVIE,
} from "./type";

export const setNowPlayingMovies = () => async (distpatch) => {
  try {
    const movie = await getNowPlayingMovies();

    distpatch({ type: SET_NOW_PLAYING_MOVIES, payload: movie });
  } catch (error) {
    alert(error.message);
  }
};

export const setOnTrendingMovies = () => async (dispatch) => {
  try {
    const movie = await getOnTrendingMovies();
    dispatch({ type: SET_MOVIES_TRENDING, payload: movie });
  } catch (error) {
    alert(error.message);
  }
};

export const setCategoryMovieId = () => async (dispatch) => {
  try {
    const category = await getCategoryIdMovies();
    dispatch({ type: SET_CATEGORY_ID, payload: category });
  } catch (error) {
    alert(error.message);
  }
};
export const setMovieID = (id) => async (dispatch) => {
  try {
    const movie = await getMovieByid(id);
    dispatch({ type: SET_MOVIE_ID, payload: movie });
  } catch (error) {
    alert(error.message);
  }
};

export const setCastMovie = (movieId) => async (dispatch) => {
  try {
    const cast = await getCastMovies(movieId);
    dispatch({ type: SET_CAST_MOVIE, payload: cast });
  } catch (error) {
    alert(error.message);
  }
};

export const setSimilarMovies = (movieId) => async (dispatch) => {
  try {
    const similarMovies = await getSimilarMovies(movieId);
    dispatch({ type: SET_SIMILIAR_MOVIES, payload: similarMovies });
  } catch (error) {
    alert(error.message);
  }
};

export const setCategoryMovie = (categoryId) => async (dispatch) => {
  try {
    const categoryMovies = await getMoviesByCategory(categoryId);
    dispatch({ type: SET_CATEGORY_MOVIES, payload: categoryMovies });
  } catch (error) {
    alert(error.message);
  }
};

export const setSearchMovie = (keyword, page) => async (dispatch) => {
  try {
    const searchMovie = await getMoviesBykeyword(keyword, page);
    dispatch({ type: SET_SEARCH_MOVIE, payload: searchMovie });
  } catch (error) {
    alert(error.message);
  }
};
