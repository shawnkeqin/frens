import React from 'react'
import { useSelector } from 'react-redux'

const AppointmentCards = () => {
const time = useSelector((state) => state.appointment.time);
const place = useSelector((state) => state.appointment.place);
    return (
        <div>
            {time}
            {place}
        </div>
    )
}

export default AppointmentCards
