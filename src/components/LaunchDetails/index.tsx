import React from "react";
import { useLaunchInfoQuery } from "../../generated/graphql";
import LaunchDetails from "./LaunchDetails";
import { Indexx } from "../Types/types";
import LoaderComp from "../LoaderComp/LoaderComp";

const LaunchDetailsContainer: React.FC<Indexx> = ({ index }) => {
  const { data, error, loading } = useLaunchInfoQuery({
    variables: { id: index.toString() },
  });
  if (loading) {
    return (
      <div>
        <LoaderComp />
      </div>
    );
  }
  if (error) {
    return <div>There was an error</div>;
  }
  if (!data) {
    return <div>Please select a mission for details</div>;
  }

  return <LaunchDetails data={data} index={index} />;
};

export default LaunchDetailsContainer;
