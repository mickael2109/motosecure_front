import { createSlice } from "@reduxjs/toolkit";
import type { UserState } from "./type";
import { login } from "./thunk";

const initialState: UserState = {
    status: "idle",
    error: null,
    token: null,
    user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {  },
  extraReducers: (builder) => {

    /**
     * login
     */
    builder.addCase(login.fulfilled, (state, action) => {
      const { token, data, success } = action.payload;
      if(success){
        state.user = data
        state.token = token
      }
      state.error = null;
      state.status = "succeeded";
    });

    builder.addCase(login.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(login.rejected, (state, action) => {    
      state.status = "failed";
      state.error = action.error.message || "An error occurred";
    });
  },
});

// export const { loginUser } = userSlice.actions;

export default userSlice.reducer;


