import React, { useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  return (
    <div>
      <div>Movie details #{movieId}</div>
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
