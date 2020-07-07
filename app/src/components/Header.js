import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: "2%",
    background: "purple",
    boxSizing: "border-box",
    padding: "1%",
    height: "125px",
  },
  toolbars: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textStyles: {
    flex: 1,
    fontSize: "2.5rem",
  },
  icon: {
    fontSize: "2.5rem",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbars}>
        <Typography className={classes.textStyles}>S H O R T E N my link L A D Y</Typography>
        {/* <Grid xs={2} /> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;