import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <p className="drop-shadow-xl">R-Movies</p>
    </Link>
  );
};

export default Logo;
