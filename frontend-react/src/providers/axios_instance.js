import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Request Interceptor
axiosInstance.interceptors.request.use(
    function (config) {

        const accessToken = localStorage.getItem('stockAccessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        // console.log(config);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

// Response Interceptor
axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },

    // Handle failed responses
   async function (error) {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest.retry) {
            originalRequest.retry = true;

            const refreshToken = localStorage.getItem('stockRefreshToken');

            try {
                const response = await axiosInstance.post('/token/refresh/', { refresh: refreshToken });
                // console.log("New Access Token==>", response.data.access);

                localStorage.setItem('stockAccessToken', response.data.access)
                originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`;
                
                return axiosInstance(originalRequest);

            } catch (error) {
                localStorage.removeItem('stockAccessToken');
                localStorage.removeItem('stockRefreshToken');
            }
        }
       return Promise.reject(error);
    }

)

export default axiosInstance;