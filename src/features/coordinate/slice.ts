import { createSlice } from "@reduxjs/toolkit";
import type { CoordinateState } from "./type";
import { getAllCoordinateMoto, getAllHistoCoordinateMoto } from "./thunk";
import { parseKeyToDate } from "../../utils/convertDate";

const initialState: CoordinateState = {
    status: "idle",
    error: null,
    coordinate: [],
    coordinateHisto: null,
    coordinateToday: null
};

const coordinateSlice = createSlice({
  name: "coordinate",
  initialState,
  reducers: {  
    addCoordinateToday: (state, action) => {
      const { data } = action.payload;
      state.coordinateToday = data
    },


    updateCoordinate: (state, action) => {
      const { data } = action.payload;

      if (state.coordinateHisto) {
          const keys = Object.keys(state.coordinateHisto);
          const mostRecentKey = keys.sort(
              (a, b) => parseKeyToDate(b).getTime() - parseKeyToDate(a).getTime()
          )[0];
          const coord = state.coordinateHisto[mostRecentKey];
          coord.coord.push(data);   
      }
      state.coordinateToday?.coord.push(data)
    },

   

  },
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


export const { addCoordinateToday, updateCoordinate } = coordinateSlice.actions;
export default coordinateSlice.reducer;


