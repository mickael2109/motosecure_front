import Axios from './Axios';




/**
 * get all coordinate moto
 */
const getAllCoordinateMoto = async (motoId: number) => {
    try {
      const response = await Axios.post('/coordinate/getallcoordmoto', {
        motoId,
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
 * get all histo coordinate moto
 */
const getAllHistoCoordinateMoto = async (motoId: number) => {
    try {
      const response = await Axios.post('/coordinate/getallhistorycoordmoto', {
        motoId,
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



export const coordinateService = {
  getAllCoordinateMoto,
  getAllHistoCoordinateMoto
};