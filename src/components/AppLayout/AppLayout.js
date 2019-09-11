import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header/Header";
import SideNav from "./SideNav";
import { DRAWER_WIDTH } from "../../constants/constant";
import { Route } from "react-router-dom";
import Dashboard from "../../views/Dashboard";
import SearchUser from "../../views/User/SearchUser";

const drawerWidth = DRAWER_WIDTH;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));
const AppLayout = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  function handleDrawerOpen() {
    setDrawerOpen(true);
  }
  function handleDrawerClose() {
    setDrawerOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header isDrawerOpen={drawerOpen} onDrawerOpen={handleDrawerOpen} />
      <SideNav isDrawerOpen={drawerOpen} onDrawerClose={handleDrawerClose} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen
        })}
      >
        <div className={classes.drawerHeader} />
        <Route path="/home" component={Dashboard} />
        <Route path="/user" component={SearchUser} />
      </main>
    </div>
  );
};

export default AppLayout;
