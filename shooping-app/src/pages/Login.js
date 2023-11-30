import {Avatar, Grid,Paper, TextField, Button, Typography,Link,} from "@mui/material";
import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import '../App.css'
import { login } from "../redux/apiCalls";
import {useDispatch,useSelector}  from 'react-redux'


export default function Login() {
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 280,
    margin: "20px auto",
    backgroundColor:`#ffffb3`,
  };
  
  const avatarStyle = { backgroundColor: `green` };
  const tstyle = { padding: "10px 0px 10px 0px" };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch();
  const {isFetching,error}=useSelector((state)=>state.user)

  async function loginUser(event) {
    event.preventDefault();
    login(dispatch,{username,password});
   
  }

  return (
    <div >
      <form >
        <Grid>
          <Paper elevation={2} style={paperStyle}>
            <Grid>
              <center>
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Login Here</h2>
              </center>
            </Grid>
            <TextField
              style={tstyle}
              label="username"
              placeholder="Enter username"
              required
              variant="filled"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="new-password"
            />
            <TextField
              style={tstyle}
              label="password"
              placeholder="Enter password"
              type="password"
              variant="filled"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" type="submit" 
            value="Login" fullWidth onClick={loginUser}
            disabled={isFetching} >
              Login
            </Button>
            {error && <Typography style={{color:'red'}}>Please enter valid username & password</Typography>}
            <Typography variant="body2" marginTop={3}>
              Don't have an account ! <Link href="/register">Register here</Link>
            </Typography>
          </Paper>
        </Grid>
      </form>
    </div>
  );
}