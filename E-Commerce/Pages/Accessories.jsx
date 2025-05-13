import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import i1 from "../Images/A1.jpeg";
import i2 from "../Images/A2.jpeg"
import i3 from "../Images/A3.jpeg"
import i4 from "../Images/A4.jpeg"
import i5 from "../Images/A5.jpeg"
import i6 from "../Images/A6.jpeg"
import i7 from "../Images/A7.jpeg"
import i8 from "../Images/A8.jpeg"
import i9 from "../Images/A9.jpeg"
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
          
            <Item><a href='/A1sp'><img src={i1}></img></a>
            <Typography variant="h6" color="black">
      Antique watch pendant
        </Typography>
        <Typography variant="body1" color="black">
     <p>899/-</p> 
     Antique brass watch pendant
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button>
        </Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><a href='/A2sp'><img src={i2}></img></a>
            <Typography variant="h6" color="black">
         Ring
        </Typography>
          <Typography variant="body1" color="black">
     <p>659/-</p> 
     set of 2 rings
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button>
        </Item>
           
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><img src={i3}></img>
            <Typography variant="h6" color="black">
      Classic Black Earing
        </Typography>
        <Typography variant="body1" color="black">
     <p>1199/-</p> 
     Black earing
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><img src={i4}></img>
            <Typography variant="h6" color="black">
      Black Beat Neckpiece#
        </Typography>
        <Typography variant="body1" color="black">
     <p>349/-</p> 
     Floral black neckpiece
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><img src={i5}></img>
            <Typography variant="h6" color="black">
      Hair Clip
        </Typography>
        <Typography variant="body1" color="black">
     <p>1399/-</p> 
     set of 3 hairclip
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><img src={i6}></img>
            <Typography variant="h6" color="black">
      Wooden Watch
        </Typography>
        <Typography variant="body1" color="black">
     <p>1999/-</p> 
     Antique Wooden Watch 
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><img src={i7}></img>
            <Typography variant="h6" color="black">
      Bangles
        </Typography>
        <Typography variant="body1" color="black">
     <p>299/-</p> 
     Metal bangles
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><img src={i8}></img>
            <Typography variant="h6" color="black">
      Watch
        </Typography>
        <Typography variant="body1" color="black">
     <p>249/-</p> 
     Watch set
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item><img src={i9}></img>
            <Typography variant="h6" color="black">
      Heart Pendant
        </Typography>
        <Typography variant="body1" color="black">
     <p>899/-</p> 
     Gold heart pendant
        </Typography>
        <Button href="https://web.whatsapp.com/">
      share
    
        </Button></Item>
          </Grid>
        </Grid>
      </Box>
      
     
    );
  }