import axios from "axios";
import { toast } from "react-toastify";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

const HttpService = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

/*** Interceptor ***/

HttpService.interceptors.request.use(
  (request) => {
    const token = cookies.get("token");
    console.log("token interceptors ============ ", token);
    if (token) request.headers.Authorization = `Bearer ${token}`;

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

HttpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      cookies.remove('token');
      window.location.href = '/'
    } else if (!!error.response && error.response.data && error.response.data.error) {
      const errArray = error.response && error.response.data && error.response.data.message
      if (typeof (errArray) == 'string') {
        toast['error'](errArray)
      } else {
        for (let error of errArray) {
          toast['error'](error)
        }
      }

    }
    /* common place for handling errors of every API response*/
    return Promise.reject(error);
  }
);

export default HttpService;
