import { useLazyQuery } from "@apollo/client";
import { TextField, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { SEARCH_MOVIES } from "../../apollo/queries/queries";
import { ViewedMoviesContext } from "../../contexts/contexts";
import MovieCard from "../ui-components/movie-card";
import GridContainer from "../ui-components/movies-container";
import { makeStyles } from "@material-ui/core/styles";
import LoadingAnimation from "../ui-components/loading-animation";

const useStyles = makeStyles({
  resultsContainer: {
    minHeight: "30rem",
    margin: "2rem auto",
  },
  error: {
    color: "red",
  },
});

const SearchMovies = () => {
  const [input, setInput] = useState("");
  const [searchForMovie, { loading, data }] = useLazyQuery(SEARCH_MOVIES);
  const [viewedMovies, updateViewedMovies] = useContext(ViewedMoviesContext);
  const classes = useStyles();

  useEffect(() => {
    //Debounce functionality, which delays the query call (the query will be triggered after 800ms when user stops typing)
    const delayedHandleChange = (e) => {
      searchForMovie({
        variables: {
          term: e,
        },
      });
    };
    const timeoutId = setTimeout(() => {
      delayedHandleChange(input);
    }, 800);

    return () => clearInterval(timeoutId);
  }, [input, searchForMovie]);

  const searchResultsMapper = () => {
    if (loading && input.length > 0) return <LoadingAnimation />;

    return (
      <GridContainer>
        {data?.search.edges.map(({ node }) => {
          return node.__typename === "Movie" ? (
            <MovieCard
              key={node.id}
              id={node.id}
              poster={node.poster}
              title={node.title}
              viewed={viewedMovies.includes(node.id)}
              onClick={() => updateViewedMovies(node.id)}
            />
          ) : null;
        })}
      </GridContainer>
    );
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Start searching for a movie
      </Typography>
      <TextField
        autoFocus
        onChange={(e) => setInput(e.target.value)}
        label="Search movies"
        type="search"
        variant="outlined"
      />
      <div className={classes.resultsContainer}>
        {data?.search.edges.length === 0 ? (
          <Typography className={classes.error} variant="body2">
            No results found, try modifying the search-term!
          </Typography>
        ) : (
          searchResultsMapper()
        )}
      </div>
    </>
  );
};

export default SearchMovies;
