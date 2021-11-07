import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialAppointmentState = {time: []}; 

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: initialAppointmentState,
  reducers: {
    setAppointmentTime(state, action) {
      // return state.time?.concat([action.payload])
      state.time?.push(action.payload)
    },
    updateAppt(state, action) {
      if(state.time[action.payload]){
        state.time[action.payload].attendance++;
      }
    },
    deleteAppointment(state,action){
      return state.time?.filter(item => item.id !== action.payload);
    }
  }
});


export default configureStore({
  reducer: {
    appointment: appointmentSlice.reducer 
  },
});


export const appointmentActions = appointmentSlice.actions; 
