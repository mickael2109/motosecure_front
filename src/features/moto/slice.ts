import { createSlice } from "@reduxjs/toolkit";
import type { MotoState } from "./type";
import { getAllMotoUser } from "./thunk";

const initialState: MotoState = {
    status: "idle",
    error: null,
    moto: []
};

const motoSlice = createSlice({
  name: "moto",
  initialState,
  reducers: {  },
  extraReducers: (builder) => {

    /**
     * get all moto user
     */
    builder.addCase(getAllMotoUser.fulfilled, (state, action) => {
      const { data, success } = action.payload;
      if(success) state.moto = data
      state.error = null;
      state.status = "succeeded";
    });

    builder.addCase(getAllMotoUser.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getAllMotoUser.rejected, (state, action) => {    
      state.status = "failed";
      state.error = action.error.message || "An error occurred";
    });
  },
});

export default motoSlice.reducer;


