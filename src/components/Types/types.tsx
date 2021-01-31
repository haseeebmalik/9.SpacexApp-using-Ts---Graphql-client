import { type } from "os";
import React from "react";
import { LaunchesQuery } from "../../generated/graphql";
import { LaunchInfoQuery } from "../../generated/graphql";

export interface LaunchQue {
  data: LaunchesQuery;
}

export interface SetInd {
  passIndex: (arg: number) => void;
}

export interface LaunchQueSetInd {
  data: LaunchesQuery;
  passIndex: (arg: number) => void;
}

export interface Indexx {
  index: number;
}
export interface LaunchInfoQue {
  data: LaunchInfoQuery;
}

export interface LaunchInfoQueIndexx {
  index: number;
  data: LaunchInfoQuery;
}

export type Images = {
  images: string[] | any;
};
