const ROOT_URL = process.env.REACT_APP_ROOT_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const getNowPlayingMovies = async () => {
  const response = await fetch(
    `${ROOT_URL}/movie/now_playing?api_key=${API_KEY}`
  );
  const movie = await response.json();
  if (response.status < 300) {
    return movie.results;
  } else {
    const error = new Error();
    error.message = movie.status_message;
    throw error;
  }
};

export const getOnTrendingMovies = async () => {
  const url = `${ROOT_URL}/movie/popular?api_key=${API_KEY}`;
  const response = await fetch(url);
  const movies = await response.json();
  if (response.status < 300) {
    return movies.results;
  } else {
    const error = new Error();
    error.message = movies.status_message;
    throw error;
  }
};

export const getCategoryIdMovies = async () => {
  const url = `${ROOT_URL}/genre/movie/list?api_key=${API_KEY}`;
  const response = await fetch(url);
  const category = await response.json();
  return category;
};

export const getMovieByid = async (id) => {
  const url = `${ROOT_URL}/movie/${id}?api_key=${API_KEY}`;

  const response = await fetch(url);
  const movie = await response.json();

  if (response.status < 300) {
    return movie;
  } else {
    const error = new Error();
    error.message = movie.status_message;
    throw error;
  }
};

export const getCastMovies = async (movieID) => {
  const url = `${ROOT_URL}/movie/${movieID}/credits?api_key=${API_KEY}`;
  const response = await fetch(url);
  const cast = await response.json();
  if (response.status < 300) {
    return cast.cast;
  } else {
    const error = new Error();
    error.message = cast.status_message;
    throw error;
  }
};

export const getSimilarMovies = async (movieId) => {
  const url = `${ROOT_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`;
  const response = await fetch(url);
  const movie = await response.json();

  if (response.status < 300) {
    return movie.results;
  } else {
    const error = new Error();
    error.message = movie.status_message;
    throw error;
  }
};

export const getMoviesByCategory = async (categoryID) => {
  const url = `${ROOT_URL}/discover/movie/?api_key=${API_KEY}&with_genres=${categoryID}`;
  const response = await fetch(url);
  const category = await response.json();
  if (response.status < 300) {
    return category.results;
  } else {
    const error = new Error();
    error.message = category.status_message;
    throw error;
  }
};

export const getMoviesBykeyword = async (keyword, page = 1) => {
  const url = `${ROOT_URL}/search/movie?api_key=${API_KEY}&query=${keyword}&page=${page}`;
  const response = await fetch(url);
  const responseMovie = await response.json();

  if (response.status < 300 && responseMovie.results.length > 0) {
    return responseMovie;
  }
  if (response.status < 300 && responseMovie.results.length === 0) {
    const error = new Error();
    error.message = "Movie Not Found";
    throw error;
  } else {
    const error = new Error();
    error.message = responseMovie.status_message;
    throw error;
  }
};
