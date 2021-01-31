import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { LaunchQueSetInd } from "../Types/types";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    paddingTop: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "black",
    backgroundColor: "darkgoldenrod",
  },
  H1: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "black",
  },
  success: {
    color: "blue",
  },
  unsuccess: {
    color: "red",
  },
}));

const LaunchIndex: React.FC<LaunchQueSetInd> = ({ data, passIndex }) => {
  const classes = useStyles();
  const nevigate = useNavigate();
  console.log("data", data);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <h1 className={classes.H1}>All Spacex Launches</h1>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>

      <Grid container spacing={3}>
        {!!data.launches &&
          data.launches.map(
            (launch, i) =>
              !!launch && (
                <Grid item xs={12} md={6} key={i}>
                  <Paper className={classes.paper}>
                    <p>{i + 1}</p>
                    <p>Mission :{launch.mission_name}</p>

                    <p>Launch Year :{launch.launch_year} </p>

                    <p>
                      {" "}
                      {JSON.stringify(launch.launch_success) == "true" ? (
                        <h2 className={classes.success}>successfull</h2>
                      ) : (
                        <h2 className={classes.unsuccess}>unsuccessfull</h2>
                      )}{" "}
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        passIndex(i + 1);
                        nevigate(`/Launch/${launch.mission_name}`);
                      }}
                    >
                      Details
                    </Button>
                  </Paper>
                </Grid>
              )
          )}
      </Grid>
    </div>
  );
};
export default LaunchIndex;
