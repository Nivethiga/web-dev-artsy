import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../Subpage/Hd1sp.css'
import i7 from '../Images/A7.jpeg'
import { Link } from '@mui/material'
import { Rating } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item><img src={i7} alt='h' style={{height:"300px",width:"500px",marginTop:"100px",borderRadius:"5px"}}/></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><h1>Show piece</h1>
          <div className='con' style={{height:"500px",width:"auto",marginLeft:"20px",marginRight:"0px"}}>
          <p>Aesthetic show piece set of 4.</p>
          <h1>899/-</h1>
          <h2>Description</h2>
          <p>Set of 4 classic unique showpiece which makes your room look more aesthetic. </p>
          <p>A showpiece is something that is admired because it is the best thing of its type, especially something that is intended to be impressive. The factory was to be a showpiece of Western investment in the East.  Wembley is the showpiece stadium in this country.</p>
          <p>Material: Steel</p>
          <p>7 Days easy Return</p>
          <a href='/buy'><button id='b2'>Buy Now</button></a>&emsp;
          </div>
    </Item>
        </Grid>
       <Grid>
       <div>
        <h3>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reviews</h3><br></br>
        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Rating(3.8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating/>
        <br>
        </br>
        <br></br>
       <h3> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Jenny</h3>
       &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;1.Nice product worth for the money.<br></br>
       &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;2.The only disappointment is that it is not made of good material.
        </div></Grid>
        
      </Grid>
    </Box>
  );
}

      


