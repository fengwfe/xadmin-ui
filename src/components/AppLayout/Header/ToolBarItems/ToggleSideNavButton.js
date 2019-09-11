import React from "react";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
const ToggleSideNavButton = props => {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={props.onDrawerOpen}
      edge="start"
      className={props.calcStyle}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default ToggleSideNavButton;
