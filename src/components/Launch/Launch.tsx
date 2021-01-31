import React from "react";
import logo from "./logo.svg";

import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
const useStyles = makeStyles({
  root: {
    alignitems: "center",
    justifyContent: "center",
  },
});

function Launch() {
  const classes = useStyles();
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Launch;
