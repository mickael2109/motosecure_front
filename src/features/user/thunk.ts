/* eslint-disable no-useless-catch */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../../service/user.service';
import type { loginInterface } from '../../types/UserInterface';





/**
 * GET USER INFO
 */
// export const getUserInfoByToken = createAsyncThunk(
//     'user/getUserInfoByToken',
//     async (token: string) => {
//       try {
//         const response = await userService.getUserInfoByToken(token); 
        
//         return response.data; 
  
//       } catch (err) {
//         throw err;
//       }
//     }
//   );


/**
 * LOGIN
 */
export const login = createAsyncThunk(
  'user/login',
  async (data: loginInterface) => {
    try {
      const response = await userService.login(data.email, data.password); 
      return response.data; 
    } catch (err) {
      throw err;
    }
  }
);
