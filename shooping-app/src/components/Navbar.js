import React from "react";
import { AppBar, Box, Grid,  Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Link,} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <AppBar
        position="static"
        style={{ backgroundColor: "#8e7fad", color: "black"}}
      >
        <Toolbar>
          <Grid container spacing={5} style={{display:"flex"}}>
            <Grid
              item
              xs={4}
              sm={4}
              style={{ marginTop: "5px", display: "flex" }}
            >
              <Box style={{ marginRight: "10px" }}>EN </Box>
              <input style={{ width: "60%", height: "60%" }} />
              <SearchIcon style={{ cursor: "pointer" }} />
            </Grid>
            <Grid item xs={2} sm={4}>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Myntra
              </Typography>
            </Grid>
            <Grid
              item
              xs={1}
              sm={2}
              style={{ marginTop: "1px", display: "flex", alignItems: "right" }}
            >
              <Box style={{ display: "flex" }}>
                <Link
                  to='/register'
                  color="inherit"
                  style={{ marginLeft: "40px", textDecoration: "none" }}
                >
                  REGISTER
                </Link>
                <Link
                  to='/login'
                  color="inherit"
                  style={{ marginLeft: "40px", textDecoration: "none" }}
                >
                  SIGN_IN
                </Link>
                <Link to="/cart">
                  <ShoppingCartOutlinedIcon
                    style={{ marginLeft: "40px", cursor: "pointer" }}
                  />
                  
                </Link> 
                  <Link to="/admin" style={{marginLeft:'15px'}}>Admin
                 </Link>
                 
                
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
