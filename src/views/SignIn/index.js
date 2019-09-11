import React from "react";
import { withRouter } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  Paper,
  Checkbox,
  FormControlLabel,
  Link,
  Divider,
  IconButton,
  Typography,
  Avatar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import AlarmIcon from "@material-ui/icons/Alarm";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(3),
    margin: "100px auto",
    width: 350,
    height: 450
  },
  thirdPartyLogin: { marginTop: 100 },
  loginButton: {
    margin: theme.spacing(3, 0, 2)
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  }
}));
const SignIn = props => {
  const classes = useStyles();
  function handleSign() {
    alert("Hello");
    props.history.push("/home");
  }

  return (
    <Paper className={classes.container}>
      <Grid
        container
        spacing={0}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            登录
          </Typography>
        </Grid>
        <Grid item>
          <form>
            <TextField label="用户名" fullWidth></TextField>
            <TextField label="密码" fullWidth></TextField>
            <FormControlLabel
              control={<Checkbox value="checkedB" color="primary" />}
              label="记住我"
            />
            <Button
              fullWidth
              color="primary"
              variant="contained"
              className={classes.loginButton}
              onClick={handleSign}
            >
              登录
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  忘记密码?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"没有账号? 注册"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item>
          <div className={classes.thirdPartyLogin}>
            <Divider />
            <Typography variant="body1" component="span">
              其他登录方式:
            </Typography>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
              <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
              <AlarmIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withRouter(SignIn);
