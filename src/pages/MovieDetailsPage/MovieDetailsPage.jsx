import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

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
    <div>
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>
      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
