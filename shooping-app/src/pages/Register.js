import { Avatar, Grid, Paper, TextField, Button, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

export default function Register() {
  const paperStyle = {
    padding: 20,
    height: "150vh",
    width: 380,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: `green` };
  const tstyle = { padding: "10px 0px 10px 0px" };
  const btnStyle = { marginTop: "25px" };
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setrPassword] = useState("");
  const [phone, setPhone] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    const responce = await fetch("http://localhost:8000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" ,},
      body: JSON.stringify({
        username,
        email,
        password,
        phone,
      }),
    })
    const data = await responce.json();

    if(data.status=== 'ok'){
       alert('Registrated Successefully')
       window.location.href='/login'
    }else{
      alert('Please enter valid Details')
    }
    
  }

  return (
    <>
      <form onSubmit={registerUser} autoComplete='off'>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid>
              <center>
                <Avatar style={avatarStyle}>
                  <AppRegistrationIcon />
                </Avatar>
                <h2>Register Here</h2>
              </center>
              
            </Grid>
            <TextField
              style={tstyle}
              label="name"
              placeholder="Enter Name"
              variant="filled"
              required
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="new-password"
            />
            <TextField
              style={tstyle}
              label="username"
              placeholder="Enter username"
              variant="filled"
              required
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              style={tstyle}
              label="phone"
              placeholder="Enter Phone"
              variant="filled"
              required
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              style={tstyle}
              label="email"
              placeholder="Enter Email"
              variant="filled"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="new-password"
            />
            <TextField
              style={tstyle}
              label="set password"
              placeholder="Set Password"
              type="password"
              variant="filled"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              style={tstyle}
              label="confirm password"
              placeholder="Confirm Password"
              type="password"
              variant="filled"
              required
              fullWidth
              value={rpassword}
              onChange={(e) => setrPassword(e.target.value)}
            />
            <br></br>
            <Button
              style={btnStyle}
              variant="contained"
              type="submit"
              fullWidth
            >
              Register
            </Button>
            <Typography variant='body2' marginTop={3}>
              Already have an account ! <Link href="/login">login here</Link>
            </Typography>
          </Paper>
        </Grid>
      </form>
    </>
  );
}
