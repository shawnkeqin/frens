import React from 'react'
import { useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AppointmentCards = () => {
const time = useSelector((state) => state?.appointment?.time);
// const place = useSelector((state) => state?.appointment?.place);

    return (
        <div>
              <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography>
            {time}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
        </div>
    )
}

export default AppointmentCards
