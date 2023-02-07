import HttpService from "./Http.service";
import { api_base_url } from "../Utils/Common/urls";

const AddressService = {}

AddressService.add = async (payload) => {
    return await HttpService.post(api_base_url + '/address', payload)
}

AddressService.getAll = async () => {
    return await HttpService.get(api_base_url + '/address')
}

AddressService.getById = async (id) => {
    return await HttpService.get(api_base_url + `/address/${id}`)
}

AddressService.update = async (id, payload) => {
    return await HttpService.put(api_base_url + `/address/${id}`, payload)
}

AddressService.delete = async (id) => {
    return await HttpService.delete(api_base_url + `/address/${id}`)
}

export default AddressService;