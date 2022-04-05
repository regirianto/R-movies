import React from "react";
import CategoryMovies from "../components/organisms/categoryMovies";
import OnPlaying from "../components/organisms/now-playing";
import TrendingMovies from "../components/organisms/trendingMovies";
import Navbar from "../components/organisms/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <OnPlaying />
      <TrendingMovies />
      <CategoryMovies />
    </>
  );
};

export default Home;
