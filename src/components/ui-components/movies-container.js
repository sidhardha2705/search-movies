import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function GridContainer({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {React.Children.map(children, (child) => {
          if (child) {
            return (
              <Grid className={classes.child} item xs={6} sm={3}>
                {child}
              </Grid>
            );
          }
        })}
      </Grid>
    </div>
  );
}
