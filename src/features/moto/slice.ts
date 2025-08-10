import { createSlice } from "@reduxjs/toolkit";
import type { MotoState } from "./type";
import { getAllMotoUser, onOffMotoThunk } from "./thunk";

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


    /**
     * on off moto
     */
    builder.addCase(onOffMotoThunk.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.error = null;

      console.log("action.payload.data: ", action.payload.data);

      if (action.payload.success) {
        const updatedMoto = action.payload.data;

        // Cherche la moto par id
        const index = state.moto.findIndex(m => m.id === updatedMoto.id);

        if (index !== -1) {
          // Mise à jour
          state.moto[index] = updatedMoto;
        } else {
          // Si elle n'existe pas encore, on l'ajoute
          state.moto.push(updatedMoto);
        }
      }
    });


    builder.addCase(onOffMotoThunk.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(onOffMotoThunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Une erreur s'est produite";
    });


  },
});

export default motoSlice.reducer;


