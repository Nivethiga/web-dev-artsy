import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import i1 from '../Images/Os1.jpeg';
import { height } from '@mui/system';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
    <img src={i1} style={{width:"150px" ,height : "150px"}}></img>
      <Typography sx={{ fontSize: 34 }} color="black" gutterBottom>
        Thank You!!!
      </Typography>
      <Typography variant="h5" component="div">
        Your Order has been placed.
      </Typography>
     
     
    </CardContent>
  
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <center><Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </center>
    
  );
}