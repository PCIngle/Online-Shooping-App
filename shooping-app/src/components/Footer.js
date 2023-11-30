import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <footer style={{paddingTop:'50px'}}>
      <Box bgcolor="text.secondary" color="white">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
               <Grid item xs={12} sm={4}>
                    <Box style={{fontSize:'30px',fontWeight:"bold"}}>Myntra</Box>
                    <Typography style={{fontSize:'15px'}}>If you like experience the best of online shopping for men, women and kids in India, you are at the right place.</Typography>
                    <FacebookIcon style={{marginRight:'6px',marginBottom:'10px'}}/>
                    <InstagramIcon style={{marginRight:'6px',marginBottom:'10px'}}/>
                    <TwitterIcon style={{marginRight:'6px',marginBottom:'10px'}}/>
               </Grid>
               <Grid item xs={12} sm={4}>
                    <Box style={{marginTop:'10px',fontSize:'20px',fontWeight:"bold"}}>Useful Links</Box>
                    <Box>
                         <Link to='/' style={{color:'white'}}>Home</Link>
                    </Box>
               </Grid>
               <Grid item xs={12} sm={4}>
                    <Box style={{marginTop:'10px',fontSize:'20px',fontWeight:"bold"}}>Contact</Box>
                    <Box >
                         <Box style={{display:'flex',marginTop:'10px'}}>
                         <RoomIcon/>
                         <Typography>4827 Laxi Road, Mumbai</Typography>
                         </Box>
                         <Box style={{display:'flex',marginTop:'10px'}}>
                         <PhoneIcon/>
                         <Typography> +91 9371937493</Typography>
                         </Box>
                         <Box style={{display:'flex',marginTop:'10px'}}>
                         <MailOutlinedIcon/>
                         <Typography>contact@myntra.com</Typography>
                         </Box>
                         
                    </Box>
               </Grid>
          </Grid>
        </Container>
      </Box> 
    </footer>
  )
};
export default Footer