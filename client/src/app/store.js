import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialAppointmentState = {time: [], attendance: 0}; 

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: initialAppointmentState,
  reducers: {
    setAppointmentTime(state, action) {
      state.time.push(action.payload);
    },
    setAppointmentAttendance(state) {
      state.attendance++;
      },
  },
});


export default configureStore({
  reducer: {
    appointment: appointmentSlice.reducer 
  },
});


export const appointmentActions = appointmentSlice.actions; 
