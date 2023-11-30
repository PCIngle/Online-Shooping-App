import { Avatar, Grid, Paper, TextField, Button, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

export const AddProduct = () => { const paperStyle = {
        padding: 20,
        height: "140vh",
        width: 380,
        margin: "20px auto",
      };
      const avatarStyle = { backgroundColor: `green` };
      const tstyle = { padding: "10px 0px 10px 0px" };
      const btnStyle = { marginTop: "25px" };
      const [img, setImg] = useState("");
      const [desc, setDesc] = useState("");
      const [title, setTitle] = useState("");
      const [size, setSize] = useState("");
      const [color, setColor] = useState("");
      const [price, setPrice] = useState("");
    
      async function registerUser(event) {
        event.preventDefault();
        const responce = await fetch("http://localhost:8000/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" ,},
          body: JSON.stringify({
            img,
            desc,
            title,
            size,
            color,
            price,
          }),
        })
        const data = await responce.json();
    
        if(data.status=== 'ok'){
           alert('Product added Successefully')
           window.location.href='/admin'
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
                      <AddIcon />
                    </Avatar>
                    <h2>Add Product</h2>
                  </center>
                  
                </Grid>
                <TextField
                  style={tstyle}
                  label="image"
                  placeholder="Add Image"
                  variant="filled"
                  required
                  fullWidth
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  autoComplete="new-password"
                />
                <TextField
                  style={tstyle}
                  label="desc"
                  placeholder="Enter Desc"
                  variant="filled"
                  required
                  fullWidth
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
                <TextField
                  style={tstyle}
                  label="title"
                  placeholder="Enter Title"
                  variant="filled"
                  required
                  fullWidth
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                  style={tstyle}
                  label="size"
                  placeholder="Enter size"
                  variant="filled"
                  required
                  fullWidth
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  autoComplete="new-password"
                />
                <TextField
                  style={tstyle}
                  label="color"
                  placeholder="Enter color"
                  variant="filled"
                  required
                  fullWidth
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
                <TextField
                  style={tstyle}
                  label="price"
                  placeholder="Enter Price"
                  variant="filled"
                  required
                  fullWidth
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <br></br>
                <Button
                  style={btnStyle}
                  variant="contained"
                  type="submit"
                  fullWidth
                >
                  Add Product
                </Button>
                <Typography variant='body2' marginTop={3}>
                  Back to admin page <Link href="/admin">Go back</Link>
                </Typography>
              </Paper>
            </Grid>
          </form>
        </>
      );
}