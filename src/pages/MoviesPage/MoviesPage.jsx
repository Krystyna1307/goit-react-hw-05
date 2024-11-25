import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      const data = await searchMovies(query);
      setMovies(data);
    };
    getData();
  }, [query]);

  const handleSetQuery = (newValues) => {
    searchParams.set("query", newValues);
    setSearchParams(searchParams);
  };
  const handleSubmit = (values) => {
    if (values.query.trim() !== "" && values.query !== query) {
      handleSetQuery(values.query);
    }
  };

  const initialValues = {
    query: "",
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ handleChange, values }) => (
          <Form>
            <Field name="query" value={values.query} onChange={handleChange} />
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
      <MovieList movies={movies} />
      <Outlet />
    </div>
  );
};

export default MoviesPage;
