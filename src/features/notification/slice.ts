import { createSlice } from "@reduxjs/toolkit";
import type { NotificationState } from "./type";
import { getAllNotificationUser } from "./thunk";

const initialState: NotificationState = {
    status: "idle",
    error: null,
    notification: []
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {  
    socketNotif: (state, action) => {
      const { rep } = action.payload;
      state.notification.push(rep); 
     
    },
  },
  extraReducers: (builder) => {

    /**
     * get all notification user
     */
    builder.addCase(getAllNotificationUser.fulfilled, (state, action) => {
      const { data, success } = action.payload;
      if(success) state.notification = data
      state.error = null;
      state.status = "succeeded";
    });

    builder.addCase(getAllNotificationUser.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getAllNotificationUser.rejected, (state, action) => {    
      state.status = "failed";
      state.error = action.error.message || "An error occurred";
    });


  },
});
export const { socketNotif } = notificationSlice.actions;
export default notificationSlice.reducer;


