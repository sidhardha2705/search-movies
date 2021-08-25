import React from "react";
import PopularMovies from "../logical-components/popular-movies";
import SearchMovies from "../logical-components/search-movies";

const HomePage = () => {
  return (
    <>
      <SearchMovies />
      <PopularMovies />
    </>
  );
};

export default HomePage;
