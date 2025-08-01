import Axios from './Axios';




/**
 * GET INFO USER BY TOKEN
 */
const getUserInfoByToken = async (token: string) => {
    try {
      const response = await Axios.post('getuserbytoken', {
        token,
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
 * LOGIN
 */
const login = async (email: string, password: string) => {
  try {
    const response = await Axios.post('/user/login', {
      email,
      password,
    });
    
    return {
      success: true,
      data: response.data,
    };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("error: ",error);
    
    const errorMessage = error.response.data;
    return {
      success: false,
      data: errorMessage,
    };
  }
};



export const userService = {
  login,
  getUserInfoByToken,
};