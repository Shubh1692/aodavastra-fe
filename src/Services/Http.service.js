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
    console.log("response", response);
    // if (
    //   response &&
    //   response.data &&
    //   response.data.hasOwnProperty("success") &&
    //   !response.data.success
    // ) {
    //   toast.success(response.data.message)
    // }
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      // cookies.remove('token');
    } else if (error?.response?.status === 400) {
      toast.error(error.response.data.message);
    }
    /* common place for handling errors of every API response*/
    return Promise.reject(error);
  }
);

export default HttpService;
