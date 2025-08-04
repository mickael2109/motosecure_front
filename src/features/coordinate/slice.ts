import { createSlice } from "@reduxjs/toolkit";
import type { CoordinateState } from "./type";
import { getAllCoordinateMoto, getAllHistoCoordinateMoto } from "./thunk";

const initialState: CoordinateState = {
    status: "idle",
    error: null,
    coordinate: [],
    coordinateHisto: null
};

const coordinateSlice = createSlice({
  name: "coordinate",
  initialState,
  reducers: {  },
  extraReducers: (builder) => {

    /**
     * get all coordinate moto
     */
    builder.addCase(getAllCoordinateMoto.fulfilled, (state, action) => {
      const { data, success } = action.payload;
      if(success) state.coordinate = data
      state.error = null;
      state.status = "succeeded";
    });

    builder.addCase(getAllCoordinateMoto.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getAllCoordinateMoto.rejected, (state, action) => {    
      state.status = "failed";
      state.error = action.error.message || "An error occurred";
    });



    /**
     * get all histo coordinate moto
     */
    builder.addCase(getAllHistoCoordinateMoto.fulfilled, (state, action) => {
      const { data, success } = action.payload;
      if(success) state.coordinateHisto = data
      state.error = null;
      state.status = "succeeded";
    });

    builder.addCase(getAllHistoCoordinateMoto.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getAllHistoCoordinateMoto.rejected, (state, action) => {    
      state.status = "failed";
      state.error = action.error.message || "An error occurred";
    });
  },
});

export default coordinateSlice.reducer;


