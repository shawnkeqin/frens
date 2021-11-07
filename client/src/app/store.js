import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialAppointmentState = {time: []}; 

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: initialAppointmentState,
  reducers: {
    setAppointmentTime(state, action) {
      return state.time?.concat([action.payload])
  //  state.time.concat(action.payload)
    },
    deleteAppointment(state, action) {
      // state.time.push(action.payload);
     
      return state.time.filter(item => item.id !== action.payload);
     
    },
  }
});


export default configureStore({
  reducer: {
    appointment: appointmentSlice.reducer 
  },
});


export const appointmentActions = appointmentSlice.actions; 
