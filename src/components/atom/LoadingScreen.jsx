import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
const LoadingScreen = () => {
  return (
    <div className="w-screen h-screen flex place-items-center justify-center">
      <CircularProgress />
    </div>
  );
};

export default LoadingScreen;
