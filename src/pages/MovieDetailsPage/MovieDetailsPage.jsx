import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    if (movieId) loadMovieDetails();
  }, [movieId]);

  if (!movieDetails) return <p>Loading...</p>;

  return (
    <div className={s.wrapper}>
      <div className={s.part_one}>
        <div className={s.poster}>
          <img
            className={s.img}
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                : defaultImg
            }
            width={250}
            alt={`${movieDetails.title} poster`}
          />
        </div>

        <div className={s.details}>
          <h1 className={s.title}>{movieDetails.title}</h1>
          <p className={s.over}>{movieDetails.overview}</p>
        </div>
      </div>

      <div className={s.part_two}>
        <p>Additional information</p>
        <nav className={s.nav}>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
