import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const loadCast = async () => {
      const data = await fetchMovieCast(movieId);
      setCast(data);
    };
    loadCast();
  }, [movieId]);

  return (
    <div>
      {cast.map((actor) => (
        <p key={actor.id}>{actor.name}</p>
      ))}
    </div>
  );
};

export default MovieCast;
