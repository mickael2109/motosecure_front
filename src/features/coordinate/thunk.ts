/* eslint-disable no-useless-catch */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { coordinateService } from '../../service/coordinate.service';



/**
 * get all coordinate moto
 */
export const getAllCoordinateMoto = createAsyncThunk(
  'coordinate/getAllCoordinateMoto',
  async (motoId: number) => {
    try {
      const response = await coordinateService.getAllCoordinateMoto(motoId); 
      return response.data; 
    } catch (err) {
      throw err;
    }
  }
);
