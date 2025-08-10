import type { OnOffMotoInterface } from '../types/MotoInterface';
import Axios from './Axios';




/**
 * get all moto user
 */
const getAllMotoUser = async (userId: number) => {
    try {
      const response = await Axios.post('/moto/getallmotouser', {
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



/**
 * on off moto
 */
const onOffMoto = async (onOffMotoInput: OnOffMotoInterface) => {
    try {
      console.log("onOffMotoInput : ",onOffMotoInput);
      
      const response = await Axios.post('/moto/updatestatus', {
        id: onOffMotoInput.id,
        status: onOffMotoInput.status
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("response: ",response);
      
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



export const motoService = {
  getAllMotoUser,
  onOffMoto
};