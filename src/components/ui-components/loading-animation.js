import { makeStyles } from "@material-ui/core";
import React from "react";
import Spinner from "../../assets/Spinner.svg";

const useStyles = makeStyles({
  image: {
    width: 75,
    height: 75,
  },
  container: {
    textAlign: "center",
    width: "100%",
  },
});

const LoadingAnimation = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.image} alt="Loaing" src={Spinner} />
    </div>
  );
};

export default LoadingAnimation;
