import { Field, Form, Formik } from "formik";
import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { Outlet } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const [query, setQuery] = useState("");

  const filteredData = query
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      )
    : movies;

  const handleSubmit = (values) => {
    setQuery(values.query); // Оновлюємо запит
  };
  const initialValues = {
    query: "",
  };
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <MovieList movies={filteredData} />
      <Outlet />
    </div>
  );
};

export default MoviesPage;
