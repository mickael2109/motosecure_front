/* eslint-disable no-useless-catch */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationService } from '../../service/notification.service';


/**
 * get all notification user
 */
export const getAllNotificationUser = createAsyncThunk(
  'notification/getAllNotificationUser',
  async (userId: number) => {
    try {
      const response = await notificationService.getAllNotificationUser(userId); 
      return response.data; 
    } catch (err) {
      throw err;
    }
  }
);




