import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialAppointmentState = {time: []}; 

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: initialAppointmentState,
  reducers: {
    setAppointmentTime(state, action) {
      state.time.push(action.payload);
    },
    deleteAppointment(state, action) {
      // state.time.push(action.payload);
     
      state.time.filter(item => item.id !== action.payload);
     
    },
  }
});


export default configureStore({
  reducer: {
    appointment: appointmentSlice.reducer 
  },
});


export const appointmentActions = appointmentSlice.actions; 
