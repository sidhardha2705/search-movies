import { useQuery } from "@apollo/client";
import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Rating from "@material-ui/lab/Rating";
import { FETCH_SINGLE_MOVIE } from "../../apollo/queries/queries";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import LoadingAnimation from "../ui-components/loading-animation";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  detailsContainer: {
    padding: "1.5rem",
    textAlign: "left",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  actionContainer: {
    textAlign: "left",
    marginBottom: "2rem",
  },
});

const SingleMovie = ({ match }) => {
  const { loading, error, data } = useQuery(FETCH_SINGLE_MOVIE, {
    variables: {
      id: match.params.id,
    },
  });
  const classes = useStyles();

  if (loading) return <LoadingAnimation />;
  if (error) return <div>There was an error fetching this movie</div>;

  const { title, poster, overview, rating, releaseDate } = data.movies.movie;
  return (
    <>
      <div className={classes.actionContainer}>
        <Link className={classes.link} to="/">
          <Button variant="outlined" startIcon={<ArrowBackIosIcon />}>
            Go back
          </Button>
        </Link>
      </div>
      <div className={classes.root}>
        <img className={classes.poster} src={poster} alt={title} />
        <div className={classes.detailsContainer}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h6">
            {new Date(releaseDate).getFullYear()}
          </Typography>
          <Rating readOnly defaultValue={rating} max={10} />
          <Typography variant="body1" gutterBottom>
            {overview}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
