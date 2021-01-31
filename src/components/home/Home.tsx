import React, { useState } from "react";
import styles from "./home.module.css";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "black",
  },
  paper3: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "black",
    backgroundColor: "silver",
  },
  button1: {
    color: "white",
    backgroundColor: "transparent",
    border: "solid",
    borderColor: "white",
    fontSize: "20px",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
    },
  },
  button2: {
    color: "black",
    backgroundColor: "transparent",
    border: "solid",
    borderColor: "black",
    fontSize: "20px",
    "&:hover": {
      color: "white",
      backgroundColor: "black",
    },
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div>
      <div className={styles.div1}>
        <br />
        <br />
        <br />

        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <div className={classes.paper}>
                <h1>WELCOME TO SPACE</h1>

                <p>UPCOMMING TEST</p>
                <h1>STARSHIP HIGH-ALTITUDE FLIHT TEST</h1>
                <br />
                <br />
                <Button className={classes.button1} variant="outlined">
                  WATCH
                </Button>
              </div>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </div>
        <br />
        <br />
      </div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className={classes.paper2}>
            <br />
            <br />
            <br />
            <br />
            <h1>Kennedy Center SpaceX</h1>
            <br />

            <p>
              NASA selected SpaceX to develop a lunar optimized Starship to
              transport crew between lunar orbit and the surface of the Moon as
              part of NASA’s Artemis program.
            </p>
            <Button className={classes.button2} variant="outlined">
              WATCH
            </Button>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <div className={classes.paper3}>
            <br />
            <br />
            <br />
            <br />
            <h3>RECENT LAUNCH</h3>
            <br />

            <h1>CRS-21 MISSION</h1>
            <Button className={classes.button2} variant="outlined">
              WATCH
            </Button>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
export default Home;
