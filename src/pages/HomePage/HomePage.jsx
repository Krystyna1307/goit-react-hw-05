import React from "react";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  return (
    <div>
      <h2>Trending today</h2>
      <MovieList />
    </div>
  );
};

export default HomePage;
