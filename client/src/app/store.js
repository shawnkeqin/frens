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
      console.log(action.payload);
      if(state.time[action.payload.id]){
        state.time[action.payload.id].going = `${action.payload.user} is going`;
      }
    },
    deleteAppointment(state,action){
      console.log(action.payload);
      // this.lists = this.lists.filter((_, index) => index !== i)
      return state.time?.filter((item,index) => index !== action.payload);
    }
  }
});


export default configureStore({
  reducer: {
    appointment: appointmentSlice.reducer 
  },
});


export const appointmentActions = appointmentSlice.actions; 