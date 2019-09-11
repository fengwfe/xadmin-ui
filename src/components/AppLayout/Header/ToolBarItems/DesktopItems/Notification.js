import React from "react";
import { IconButton, Badge } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
const Notification = () => {
  return (
    <IconButton aria-label="show 17 new notifications" color="inherit">
      <Badge badgeContent={17} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

export default Notification;
