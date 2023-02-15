import HttpService from "./Http.service";
import { api_base_url } from "../Utils/Common/urls";

const PostService = {}

PostService.getAll = async (page, limit) => {
    return await HttpService.get(api_base_url + `/post?page=${page}&itemsPerPage=${limit}`)
}
PostService.addComment = async (payload) => {
    return await HttpService.post(api_base_url + `/comment`,payload)
}

export default PostService;