import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { AccountMenu, MoreMenu } from "./ToolBarItems/Menus";
import LinearProgress from "@material-ui/core/LinearProgress";
import {
  ToggleSideNavButton,
  UserAccount,
  Notification,
  More
} from "./ToolBarItems";

import { DRAWER_WIDTH } from "../../../constants/constant";

const drawerWidth = DRAWER_WIDTH;
const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  toggleNavButton: {
    marginRight: theme.spacing(2)
  },
  toggleNavButtonShift: {
    display: "none"
  },
  blankSpace: {
    flexGrow: 1
  },
  desktopToolBarItems: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  mobileToolBarItems: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

const Header = props => {
  const [accountMenuAnchorEl, setAccountMenuAnchorEl] = React.useState(null);
  const isAccountMenuOpen = Boolean(accountMenuAnchorEl);

  const [moreMenuAnchorEl, setMoreMenuAnchorEl] = React.useState(null);
  const isMoreMenuOpen = Boolean(moreMenuAnchorEl);

  function handleClickAccount(event) {
    setAccountMenuAnchorEl(event.currentTarget);
  }

  function handleCloseAccountMenu() {
    setAccountMenuAnchorEl(null);
  }
  function handleClickMore(event) {
    setMoreMenuAnchorEl(event.currentTarget);
  }

  function handleCloseMoreMenu() {
    setMoreMenuAnchorEl(null);
  }

  const classes = useStyles();
  const toggleSideNavButtonStyle = clsx(
    classes.toggleNavButton,
    props.isDrawerOpen && classes.toggleNavButtonShift
  );
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: props.isDrawerOpen
      })}
    >
      <Toolbar>
        <ToggleSideNavButton
          calcStyle={toggleSideNavButtonStyle}
          onDrawerOpen={props.onDrawerOpen}
        />
        <Typography variant="h6" noWrap>
          用户管理系统
        </Typography>
        <div className={classes.blankSpace} />
        <div className={classes.desktopToolBarItems}>
          <Notification />
          <UserAccount handleClick={handleClickAccount} />
        </div>
        <div className={classes.mobileToolBarItems}>
          <More handleClick={handleClickMore} />
        </div>
      </Toolbar>

      <MoreMenu
        isMenuOpen={isMoreMenuOpen}
        anchorEl={moreMenuAnchorEl}
        handleClose={handleCloseMoreMenu}
        handleClickAccount={handleClickAccount}
      />
      <AccountMenu
        isMenuOpen={isAccountMenuOpen}
        anchorEl={accountMenuAnchorEl}
        handleClose={handleCloseAccountMenu}
      />
      <LinearProgress />
    </AppBar>
  );
};

export default Header;
