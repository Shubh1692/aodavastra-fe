import axios from 'axios';
import ToasterService from './Toaster.service.ts';

const HttpService = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Accept': 'application/json',
    // 'Content-Type': 'multipart/form-data',
  }
});

/*** Interceptor ***/

HttpService.interceptors.request.use(request => {
  const user = localStorage.getItem("access_token");
  console.log('user----------->', user)
  if (user) {
    request.headers.Authorization = `Bearer ${localStorage.getItem("access_token")}`;
  }
  return request;
}, error => {
  return Promise.reject(error);
});

HttpService.interceptors.response.use(response => {
  if (response && response.data && response.data.hasOwnProperty('success') && !response.data.success) {
    new ToasterService().show(response.data.message);
  }
  return response;
}, error => {
  /* common place for handling errors of every API response*/
  return Promise.reject(error);
});

export default HttpService;