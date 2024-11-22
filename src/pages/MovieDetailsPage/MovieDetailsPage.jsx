import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  return (
    <div>
      <nav className={s.nav}>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
