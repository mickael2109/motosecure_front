/* eslint-disable no-useless-catch */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { motoService } from '../../service/moto.service';
import type { OnOffMotoInterface } from '../../types/MotoInterface';



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



/**
 * on off moto thunk
 */
export const onOffMotoThunk = createAsyncThunk(
  'moto/onOffMotoThunk',
  async (onOffMotoInput: OnOffMotoInterface) => {
    try {
      const response = await motoService.onOffMoto(onOffMotoInput); 
      return response.data; 
    } catch (err) {
      throw err;
    }
  }
);
