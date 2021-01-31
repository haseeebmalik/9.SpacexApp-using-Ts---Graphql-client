import React from "react";
import { useLaunchesQuery } from "../../generated/graphql";
import LaunchIndex from "./LaunchIndex";
import { SetInd } from "../Types/types";
import LoaderComp from "../LoaderComp/LoaderComp";

const LaunchContainer: React.FC<SetInd> = ({ passIndex }) => {
  const { data, error, loading } = useLaunchesQuery();

  if (loading) {
    return (
      <div>
        <LoaderComp />
      </div>
    );
  }

  if (error || !data) {
    console.log("data", data);
    return <div>There was an error: {error}</div>;
  }

  return <LaunchIndex data={data} passIndex={passIndex} />;
};
export default LaunchContainer;
