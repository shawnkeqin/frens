import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };
const initialPaymentState = { success: false };
const initialAppointmentState = {time: '', place: ''}; 

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: initialAppointmentState,
  reducers: {
    setAppointmentTime(state, action) {
      state.time = state.time + action.payload;
    },
    setAppointmentPlace(state, action) {
        state.place = state.place + action.payload;
      },
  },
});


export default configureStore({
  reducer: {
    appointment: appointmentSlice.reducer 
  },
});


export const appointmentActions = appointmentSlice.actions; 