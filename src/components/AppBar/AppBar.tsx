import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppBar1() {
  const classes = useStyles();
  const nevigate = useNavigate();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            SPACEX
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              nevigate("./");
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              nevigate("Launch");
            }}
          >
            Launch
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
