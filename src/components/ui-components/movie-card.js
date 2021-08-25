import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ id, poster, title, viewed, onClick }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      position: "relative",
      maxWidth: 200,
      textDecoration: "none",
      margin: "auto",
    },
    media: {
      height: 250,
    },
    link: {
      textDecoration: "none",
    },
    title: {
      position: "absolute",
      top: "80%",
      left: "50%",
      width: "100%",
      transform: "translate(-50%, -50%)",
      color: "white",
      zIndex: "2",
    },
    tint: {
      position: "absolute",
      backgroundColor: theme.colors.tint[viewed ? "secondary" : "primary"],
      top: "0",
      left: "0",
      bottom: "0",
      right: "0",
      zIndex: "1",
    },
  }));
  const classes = useStyles();
  return (
    <Link onClick={onClick} key={id} className={classes.link} to={`/${id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={poster} title={title} />
          <Typography className={classes.title} gutterBottom variant="h6">
            {title}
          </Typography>
          <div className={classes.tint}>&nbsp;</div>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default MovieCard;
