import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import i1 from "../Images/Aw1.jpeg";
import i2 from "../Images/Aw2.jpeg"
import i3 from "../Images/Aw3.jpeg"
import i4 from "../Images/Aw4.jpeg"
import i5 from "../Images/Aw6.jpeg"
import i6 from "../Images/Aw7.jpeg"
import i7 from "../Images/Aw8.jpeg"
import i8 from "../Images/Aw9.jpeg"
import i9 from "../Images/Aw10.jpeg"
import { Button, Link } from '@mui/material';
import './Homedecor.css'
import Hd1sp from '../Subpage/Hd1sp';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
    return (
       
      <Box sx={{ flexGrow: 1}}>
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid xs={2} sm={4} md={4}>
          
            <Item><a href='/Aw1sp'><img src={i1}></img></a>
            <Typography variant="h6" color="black">
      Art 1
        </Typography>
        <Typography variant="body1" color="black">
     <p>899/-</p> 
     Illusion painting
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button>
        </Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><a href='/Aw2sp'><img src={i2}></img></a>
            <Typography variant="h6" color="black">
         Art 2
        </Typography>
          <Typography variant="body1" color="black">
     <p>659/-</p> 
     Classic painting
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button>
        </Item>
           
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><img src={i3}></img>
            <Typography variant="h6" color="black">
      Art 3
        </Typography>
        <Typography variant="body1" color="black">
     <p>1199/-</p> 
     City painting
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><img src={i4}></img>
            <Typography variant="h6" color="black">
      Art 4
        </Typography>
        <Typography variant="body1" color="black">
     <p>349/-</p> 
     Creative painting
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><img src={i5}></img>
            <Typography variant="h6" color="black">
      Art 5
        </Typography>
        <Typography variant="body1" color="black">
     <p>1399/-</p> 
     Couple painting
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><img src={i6}></img>
            <Typography variant="h6" color="black">
      Art 6
        </Typography>
        <Typography variant="body1" color="black">
     <p>1999/-</p> 
     Radhe Krishn Artwork
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><img src={i7}></img>
            <Typography variant="h6" color="black">
      Art 7
        </Typography>
        <Typography variant="body1" color="black">
     <p>299/-</p> 
     Aesthetic floral painting
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><img src={i8}></img>
            <Typography variant="h6" color="black">
      Art 8
        </Typography>
        <Typography variant="body1" color="black">
     <p>249/-</p> 
     Fantasy art
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><img src={i9}></img>
            <Typography variant="h6" color="black">
      Art 9
        </Typography>
        <Typography variant="body1" color="black">
     <p>899/-</p> 
     Batman
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
        </Grid>
      </Box>
      
     
    );
  }