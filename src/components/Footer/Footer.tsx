import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <div className={classes.paper}>
            <Button variant="outlined" color="primary">
              LinkedIn
            </Button>
          </div>
        </Grid>
        <Grid item xs>
          <div className={classes.paper}>
            <Button variant="outlined" color="primary">
              Twitter
            </Button>
          </div>
        </Grid>
        <Grid item xs>
          <div className={classes.paper}>
            <Button variant="outlined" color="primary">
              Instagram
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
