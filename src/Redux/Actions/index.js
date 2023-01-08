// import { SUCCESS_SIGNUP } from '../ActionTypes';

import http from '../../Services/Http.service';
const url = process.env.REACT_APP_BASE_URL;

export const registerAction = (payload) => async (dispatch) => {
    console.log('register action')
    const result = await http.post(url, payload);
    console.log('result', result)

}