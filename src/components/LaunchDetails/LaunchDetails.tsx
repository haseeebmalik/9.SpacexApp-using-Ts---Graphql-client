import React, { useState } from "react";
import { LaunchInfoQuery } from "../../generated/graphql";
import { LaunchInfoQueIndexx } from "../Types/types";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import ImageGrid from "./imageGrid";

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

const LaunchDetails: React.FC<LaunchInfoQueIndexx> = ({ data, index }) => {
  const classes = useStyles();
  if (!data.launch) {
    return <div>Launch unavailable</div>;
  }
  return (
    <div className="LaunchDetails">
      <div className="LaunchDetailsStatus">
        <Grid container spacing={3}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className={classes.paper}>
              <span>({data.launch.flight_number})</span>

              <h1>
                {data.launch.mission_name}-{data.launch.rocket?.rocket_name}
              </h1>
              <p>
                Launched from {data.launch.launch_site?.site_name} in{" "}
                {data.launch.launch_year}
              </p>
              <p>{data.launch.details}</p>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
      {!!data.launch.links && data.launch.links.flickr_images && (
        <div>
          <ImageGrid images={data.launch.links.flickr_images} />
        </div>
      )}
    </div>
  );
};

export default LaunchDetails;
