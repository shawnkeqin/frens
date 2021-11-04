import React from 'react'
import { useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

// const cardStyle ={
//   backgroundColor:"#2a3166",
//   border: "3px solid black"
// }



const AppointmentCards = () => {
const time = useSelector((state) => state?.appointment?.time);
var uniq = [...new Set(time)];
uniq = uniq.filter(Boolean)
console.log(uniq);
    return (
      <div>
      {uniq.map((item) =>( 
        <div style={{display: 'inline-block', marginRight: '10px'}}>
 <Card className="card_color" sx={{ maxWidth: 275 }}>
 <CardContent>
   <Typography style={{color: "white"}}>
   <AccessTimeFilledIcon/> <br/>  {item}
   </Typography>
 </CardContent>
 <CardActions>

 </CardActions>
</Card> 
</div>
      ))}
            
        </div>
    )
}

export default AppointmentCards
