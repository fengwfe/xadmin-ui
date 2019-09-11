import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Card,
  CardHeader,
  Tooltip,
  IconButton,
  Divider,
  CardContent
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import GetAppIcon from "@material-ui/icons/GetApp";
import PublishIcon from "@material-ui/icons/Publish";
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
        <Card>
          <CardHeader
            title="查询结果"
            action={
              <div>
                <Tooltip title="删除">
                  <IconButton aria-label="settings">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="导出">
                  <IconButton aria-label="settings">
                    <GetAppIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="导入">
                  <IconButton aria-label="settings">
                    <PublishIcon />
                  </IconButton>
                </Tooltip>
              </div>
            }
          />
          <Divider />
          <CardContent style={{ padding: 0 }}>
            <UserTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
