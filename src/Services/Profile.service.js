import HttpService from "./Http.service";
import { api_base_url } from "../Utils/Common/urls";

const ProfileService = {}

ProfileService.user = async () => {
    return await HttpService.get(api_base_url + '/user/me')
}

export default ProfileService;