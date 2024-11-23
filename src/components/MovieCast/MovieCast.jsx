import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const defaultImg =
  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then((data) => setCast(data.cast));
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={
                movieData.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
