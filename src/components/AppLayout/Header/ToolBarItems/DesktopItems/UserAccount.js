import React from "react";
import { IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
const UserAccount = props => {
  return (
    <div>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls="account"
        aria-haspopup="true"
        onClick={props.handleClick}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </div>
  );
};

export default UserAccount;
