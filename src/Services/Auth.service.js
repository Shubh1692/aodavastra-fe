import HttpService from "./Http.service";
import { api_base_url } from "../Utils/Common/urls";

const AuthService = {}

AuthService.signup = async (payload) => {
    return await HttpService.post(api_base_url + '/user/signup', payload)
}

AuthService.login = async (payload) => {
    return await HttpService.post(api_base_url + '/user/login', payload)
}

AuthService.forgotPassword = async (payload) => {
    return await HttpService.post(api_base_url + '/user/forgotten-password', payload)
}

AuthService.resetPassword = async (payload) => {
    return await HttpService.post(api_base_url + '/user/reset-password', payload)
}

AuthService.userGet = async () => {
    return await HttpService.get(api_base_url + '/user/me')
}

AuthService.userUpdate = async (payload) => {
    return await HttpService.put(api_base_url + '/user', payload)
}

AuthService.userProfilePicture = async (payload) => {
    return await HttpService.put(api_base_url + '/user/profile-picture', payload)
}

AuthService.updatePassword = async (payload) => {
    return await HttpService.put(api_base_url + '/user/change-password', payload)
}

export default AuthService;