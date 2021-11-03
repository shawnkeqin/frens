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
// const place = useSelector((state) => state?.appointment?.place);
const testArr = ["Date: 16/11/21, Appointment Name: Dinner with Craig,\Time: 6PM,\Place: Chinatown","Date: 17/11/21, Appointment Name: Lunch with Dad, Time: 12PM, Place: Clarke Quay","Date: 20/11/21, Appointment Name: Drinks with Colleagues, Time: 8PM, Place: Telok Ayer","Date: 17/11/21, Appointment Name: Breakfast with Dad, Time: 10AM, Place: Jurong","Date: 17/11/21, Appointment Name: Breakfast with Dad, Time: 10AM, Place: Jurong","Date: 17/11/21, Appointment Name: Breakfast with Dad, Time: 10AM, Place: Jurong"];
    {/* <Card className="card_color" sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography style={{color: "white"}}>
            {/* {time} *
            hello nice to meet you how are you?
        </Typography>
      </CardContent>
      <CardActions>
   
      </CardActions>
    </Card> */}

// console.log(time);
    return (
      <div>
      {testArr.map((item) =>( 
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
