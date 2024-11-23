import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
