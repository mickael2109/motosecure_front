import axios from 'axios'


const Axios = axios.create({
    // baseURL: "http://192.168.1.151:4000"
    baseURL: "https://mc-back.onrender.com"
    // baseURL: 'http://localhost:4000' 
    
})

// Interceptor pour capturer les erreurs
Axios.interceptors.response.use(
    response => response,
    error => {
        // Si une erreur de réponse est détectée
        if (!error.response) {
            // Erreur réseau ou serveur inaccessible
            throw new Error('Network Error');
        }
        return Promise.reject(error);
    }
);

export default Axios

// export const BackUrl = 'http://192.168.1.151:4000'
export const BackUrl = 'https://mc-back.onrender.com'
// export const BackUrl = 'http://localhost:4000'