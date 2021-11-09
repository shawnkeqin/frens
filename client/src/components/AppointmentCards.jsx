
   
import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { appointmentActions } from "../app/store";
import Button from '@mui/material/Button';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import Typography from '@mui/material/Typography';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const AppointmentCards = (user) => {
const time = useSelector((state) => state?.appointment?.time);
const [appts,setAppts] = useState([]); 
const dispatch = useDispatch(); 


const deleteAppt = (e) => {
  
  dispatch(appointmentActions.deleteAppointment(e.target.value));
}

const updateAttendance = (e) => {
  const obj = {user: user.user, id: e.target.value}
 dispatch(appointmentActions.updateAppt(obj));
 
}

useEffect(() => {
//   var uniq = time?.filter((item, index, self) =>
//   index === self.findIndex((t) => (
//     t?.details === item?.details 
//   ))
// )
// uniq = uniq?.filter(Boolean)
// console.log(uniq);
  setAppts(time);
}, [time])
    return (
      <div>
      {appts?.map((item, index) =>( 
        <div style={{display: 'inline-block', marginRight: '10px'}}>
{item.details && (<Card key={index} className="card_color" sx={{ maxWidth: 275 }}>
 <CardContent>
   <Typography style={{color: "white"}}>
   <AccessTimeFilledIcon/> <br/>  {item.details}
   </Typography>
   <EmojiPeopleIcon/>: {item.going}
 </CardContent>

 <CardActions>
 </CardActions>

 <Button variant="contained" value={index} size="small" style={{color: 'purple'}} onClick={updateAttendance}>Attending</Button>

 <div style={{float: 'right'}}>
 <Button variant="contained" value={index} size="small" style={{color: 'purple'}} onClick={deleteAppt}>Delete</Button>
 </div>
</Card> )}

</div>
      ))}
            
        </div>
    )
}

export default AppointmentCards