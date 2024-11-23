import React from "react";
import { Outlet } from "react-router-dom";

const MoviesPage = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MoviesPage;
