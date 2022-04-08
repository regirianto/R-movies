import {
  SET_MOVIES_TRENDING,
  SET_NOW_PLAYING_MOVIES,
  SET_CATEGORY_ID,
  SET_MOVIE_ID,
  SET_CAST_MOVIE,
  SET_SIMILIAR_MOVIES,
  SET_CATEGORY_MOVIES,
  SET_SEARCH_MOVIE,
  SET_PAGE,
  SET_KEYWORD,
} from "../action/type";

const movieState = {
  categoryMovieID: [],
  nowPlayingMovies: [],
  onTrendingMovies: [],
  categoryMovies: [],
  movieID: {},
  castMovie: [],
  similarMovies: [],
  searchMovie: {},
  page: 1,
  keyword: "",
};

const moviesReducer = (state = movieState, action) => {
  if (action.type === SET_NOW_PLAYING_MOVIES) {
    return {
      ...state,
      nowPlayingMovies: action.payload,
    };
  }
  if (action.type === SET_MOVIES_TRENDING) {
    return {
      ...state,
      onTrendingMovies: action.payload,
    };
  }
  if (action.type === SET_CATEGORY_ID) {
    return {
      ...state,
      categoryMovieID: action.payload,
    };
  }
  if (action.type === SET_MOVIE_ID) {
    return {
      ...state,
      movieID: action.payload,
    };
  }
  if (action.type === SET_CAST_MOVIE) {
    return {
      ...state,
      castMovie: action.payload,
    };
  }
  if (action.type === SET_SIMILIAR_MOVIES) {
    return {
      ...state,
      similarMovies: action.payload,
    };
  }
  if (action.type === SET_CATEGORY_MOVIES) {
    return {
      ...state,
      categoryMovies: action.payload,
    };
  }
  if (action.type === SET_SEARCH_MOVIE) {
    return {
      ...state,
      searchMovie: action.payload,
    };
  }
  if (action.type === SET_PAGE) {
    return {
      ...state,
      page: action.value,
    };
  }
  if (action.type === SET_KEYWORD) {
    return {
      ...state,
      keyword: action.value,
    };
  }
  return state;
};

export default moviesReducer;
