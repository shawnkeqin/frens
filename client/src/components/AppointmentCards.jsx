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
const [appts,setAppts] = useState([]); 
const dispatch = useDispatch(); 

const setAttendance = (id) => {
  for(let i =0; i < appts.length; i += 1){
    if(appts.id === id){
        appts.attendance++; 
    }
  }
    // dispatch(appointmentActions.setAppointmentAttendance());
}

useEffect(() => {
  var uniq = time.filter((item, index, self) =>
  index === self.findIndex((t) => (
    t.details === item.details 
  ))
)
uniq = uniq.filter(Boolean)
  setAppts(uniq);
}, [time])
    return (
      <div>
      {appts.map((item) =>( 
        <div style={{display: 'inline-block', marginRight: '10px'}}>
{item.details && (<Card key={item.details} className="card_color" sx={{ maxWidth: 275 }}>
 <CardContent>
   <Typography style={{color: "white"}}>
   <AccessTimeFilledIcon/> <br/>  {item.details}
   </Typography>
   Attendance: {item.attendance}
 </CardContent>

 <CardActions>
 </CardActions>
 <Button variant="contained" size="small" style={{color: 'purple'}} onClick={setAttendance(item.id)}>Attending</Button>
</Card> )}

</div>
      ))}
            
        </div>
    )
}

export default AppointmentCards
