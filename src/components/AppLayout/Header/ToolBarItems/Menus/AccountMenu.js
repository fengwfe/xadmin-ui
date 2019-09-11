import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const AccountMenu = props => {
  return (
    <Menu
      anchorEl={props.anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="account"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={props.isMenuOpen}
      onClose={props.handleClose}
    >
      <MenuItem onClick={props.handleClose}>Profile</MenuItem>
      <MenuItem onClick={props.handleClose}>My account</MenuItem>
    </Menu>
  );
};

export default AccountMenu;
