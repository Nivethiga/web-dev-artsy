import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import iw1 from "../Pics/A7.jpeg";
import iw2 from "../Pics/A1.jpeg";
import iw9 from "../Pics/Aw2.jpeg";
import { Button, Link } from '@mui/material';


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
      <div><br></br><br></br><br></br><br></br><br></br></div>
      <Typography variant="h4" color="black">
          TRENDING COLLECTIONS
            </Typography>
            <br></br><br></br><br></br><br></br>
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid xs={2} sm={4} md={4}>
          
            <Item><a href='/A7sp'><img src={iw1}></img></a>
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
            <Item><a href='A1sp'><img src={iw2}></img></a>
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
            <Item><a href='/Aw2sp'><img src={iw9}></img></a>
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
        <br></br> <br></br>
      </Box>
      
     
    );
  }