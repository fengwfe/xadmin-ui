import React from "react";
import { IconButton } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
const More = props => {
  return (
    <IconButton
      aria-label="show more"
      aria-controls="more"
      aria-haspopup="true"
      onClick={props.handleClick}
      color="inherit"
    >
      <MoreIcon />
    </IconButton>
  );
};

export default More;
