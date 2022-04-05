import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryMovieId } from "../../../config/redux/action/movieActions";

const BadgeCategory = ({ currentCategory, setCurrentCategory }) => {
  const { categoryMovieID } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCategoryMovieId());
  }, []);

  const { genres } = categoryMovieID;
  return (
    <div className="flex items-center gap-x-2 overflow-scroll py-4 my-2">
      {categoryMovieID.length === 0 ? (
        <p>Loading ....</p>
      ) : (
        genres.map((category) => (
          <div
            className={`px-8 py-2 min-w-min  text-white rounded-full cursor-pointer select-none ${
              currentCategory === category.id
                ? "bg-primary shadow-lg"
                : "bg-gray-500"
            }`}
            key={category.id}
            onClick={() => setCurrentCategory(category.id)}
          >
            {category.name}
          </div>
        ))
      )}
    </div>
  );
};

export default BadgeCategory;
