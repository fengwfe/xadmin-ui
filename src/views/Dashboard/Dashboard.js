import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import UserTable from "./UserTable";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="subtitle3" color="textSecondary">
              用户管理
            </Typography>
            <Typography component="h1" variant="h5">
              用户查询
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              新增用户
            </Button>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: 20 }}>
        <Grid container alignItems="center">
          <Grid item>
            <TextField
              id="standard-uncontrolled"
              label="用户名"
              defaultValue="foo"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-uncontrolled"
              label="状态"
              defaultValue="foo"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <Button variant="contained" size="large">
              查询
            </Button>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: 20 }}>
        <UserTable />
      </div>
    </div>
  );
};

export default Dashboard;
