import { Avatar, Grid, Paper, TextField, Button} from "@mui/material";
import React, { useState } from "react";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import {Link} from 'react-router-dom'

export default function ShippingPage() {
  const paperStyle = {
    padding: 20,
    height: "130vh",
    width: 380,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: `green` };
  const tstyle = { padding: "10px 0px 10px 0px" };
  const btnStyle = { marginTop: "25px" };
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form  autoComplete='off'>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid>
              <center>
                <Avatar style={avatarStyle}>
                  <AppRegistrationIcon />
                </Avatar>
                <h2>Shipping Details</h2>
              </center>
              
            </Grid>
            <TextField
              style={tstyle}
              label="Enter Name"
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
              label="address"
              placeholder="address"
              variant="filled"
              required
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              style={tstyle}
              label="Phone"
              placeholder="Phone"
              type="number"
              variant="filled"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <Link to='/paySuccess'>
            <Button
              style={btnStyle}
              variant="contained"
              type="submit"
              fullWidth
            >
              Make Payment
            </Button>
            </Link >
          </Paper>
        </Grid>
      </form>
    </>
  );
}
