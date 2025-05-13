import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import i1 from "../Images/Hd1.jpeg";
import i2 from "../Images/Hd2.jpeg"
import i3 from "../Images/Hd3.jpeg"
import i4 from "../Images/Hd4.jpeg"
import i5 from "../Images/Hd5.jpeg"
import i6 from "../Images/Hd6.jpeg"
import i7 from "../Images/Hd7.jpeg"
import i8 from "../Images/Hd8.jpeg"
import i9 from "../Images/Hd9.jpeg"
import { Button, Link } from '@mui/material';



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
          
            <Item>
           <a href='/hd1sp'><img src={i1}></img></a>
            <Typography variant="h6" color="black">
            Show pieces
        </Typography>
        <Typography variant="body1" color="black">
     <p>899/-</p> 
     set of 4 home decor show piece
        </Typography>
        
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button>
        </Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><a href='/hd2sp'><img src={i2}></img></a>
            <Typography variant="h6" color="black">
         Flower Pot 
        </Typography>
          <Typography variant="body1" color="black">
     <p>659/-</p> 
     set of 3 indoor flower pot
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button>
        </Item>
           
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><a href='/hd3sp'><img src={i3}></img></a>
            <Typography variant="h6" color="black">
      Wall Decor
        </Typography>
        <Typography variant="body1" color="black">
     <p>1199/-</p> 
     wooden wall decor set
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><a href='/hd4sp'><img src={i4}></img></a>
            <Typography variant="h6" color="black">
      Photo Frame
        </Typography>
        <Typography variant="body1" color="black">
     <p>349/-</p> 
     set of 3 photo frames
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><a href='/hd5sp'><img src={i5}></img></a>
            <Typography variant="h6" color="black">
      Book shelf
        </Typography>
        <Typography variant="body1" color="black">
     <p>1399/-</p> 
     White wooden book shelf
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><a href='/hd6sp'><img src={i6}></img></a>
            <Typography variant="h6" color="black">
      Study Table
        </Typography>
        <Typography variant="body1" color="black">
     <p>1999/-</p> 
     Wooden Study table
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><a href='/hd7sp'><img src={i7}></img></a>
            <Typography variant="h6" color="black">
      Flower Vase
        </Typography>
        <Typography variant="body1" color="black">
     <p>299/-</p> 
     White Aesthetic Flower Vase
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item>
            <a href='/hd8sp'><img src={i8}></img></a>
            <Typography variant="h6" color="black">
      Photo Frames
        </Typography>
        <Typography variant="body1" color="black">
     <p>249/-</p> 
     set of 6 photo frame
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><a href='/hd9sp'><img src={i9}></img></a>
            <Typography variant="h6" color="black">
      Wall Hangings
        </Typography>
        <Typography variant="body1" color="black">
     <p>899/-</p> 
     set of 15 wall hangings
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          
        </Grid>
        
      </Box>
      
      
     
    );
  }