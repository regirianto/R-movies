import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCategoryMovie } from "../../../config/redux/action/movieActions";
import MovieSection from "../../molecule/MovieSection";
import BadgeCategory from "./BadgeCategory";
import CardCategory from "./CardCategory";
const CategoryMovies = () => {
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState(28);

  useEffect(() => {
    dispatch(setCategoryMovie(currentCategory));
  }, [currentCategory]);

  return (
    <MovieSection title={"Category Movies"}>
      <BadgeCategory
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <CardCategory />
    </MovieSection>
  );
};

export default CategoryMovies;
