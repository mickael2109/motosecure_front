import Axios from './Axios';




/**
 * get all notification user
 */
const getAllNotificationUser = async (userId: number) => {
    try {
      const response = await Axios.post('/notification/getall', {
        userId,
      });
      return {
        success: true,
        data: response.data,
      };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage = error.response.data;
      return {
        success: false,
        data: errorMessage,
      };
    }
};




export const notificationService = {
  getAllNotificationUser,
};