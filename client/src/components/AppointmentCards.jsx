import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { appointmentActions } from "../app/store";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const AppointmentCards = () => {
const time = useSelector((state) => state?.appointment?.time);
const attendance = useSelector((state) => state?.appointment?.attendance);
const [appts,setAppts] = useState([]); 
const dispatch = useDispatch(); 
var uniq = [...new Set(time)];
uniq = uniq.filter(Boolean)

const setAttendance = () => {
  dispatch(appointmentActions.setAppointmentAttendance());
}

useEffect(() => {
  setAppts(uniq);
}, [time,appts])
    return (
      <div>
      {appts.map((item) =>( 
        <div style={{display: 'inline-block', marginRight: '10px'}}>
 <Card className="card_color" sx={{ maxWidth: 275 }}>
 <CardContent>
   <Typography style={{color: "white"}}>
   <AccessTimeFilledIcon/> <br/>  {item}
   </Typography>
   Attendance: {attendance}
 </CardContent>

 <CardActions>
 </CardActions>
 <Button variant="contained" size="small" color="primary" onClick={setAttendance}>Attending</Button>
</Card> 
</div>
      ))}
            
        </div>
    )
}

export default AppointmentCards
