/* eslint-disable no-useless-catch */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { motoService } from '../../service/moto.service';



/**
 * get all moto user
 */
export const getAllMotoUser = createAsyncThunk(
  'moto/getAllMoto',
  async (userId: number) => {
    try {
      const response = await motoService.getAllMotoUser(userId); 
      return response.data; 
    } catch (err) {
      throw err;
    }
  }
);
