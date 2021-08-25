import { useQuery } from "@apollo/client";
import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { FETCH_POPULAR_MOVIES } from "../../apollo/queries/queries";
import { ViewedMoviesContext } from "../../contexts/contexts";
import LoadingAnimation from "../ui-components/loading-animation";
import MovieCard from "../ui-components/movie-card";
import GridContainer from "../ui-components/movies-container";

const PopularMovies = () => {
  const { loading, error, data } = useQuery(FETCH_POPULAR_MOVIES);
  const [viewedMovies, updateViewedMovies] = useContext(ViewedMoviesContext);

  const moviesMapper = () => {
    return data.movies.popular.edges.map(({ node }) => (
      <MovieCard
        key={node.id}
        id={node.id}
        poster={node.poster}
        title={node.title}
        onClick={() => updateViewedMovies(node.id)}
        viewed={viewedMovies.includes(node.id)}
      />
    ));
  };

  if (loading) return <LoadingAnimation />;
  if (error) return <div>Error fetching popular movies</div>;
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Popular movies right now
      </Typography>
      <GridContainer>{moviesMapper()}</GridContainer>
    </>
  );
};

export default PopularMovies;
