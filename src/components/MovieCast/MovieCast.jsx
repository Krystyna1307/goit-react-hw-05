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
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : "https://dummyimage.com/100x150/cccccc/000.jpg&text=No+Image"
              }
              alt={actor.name}
              width="100"
              height="150"
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
