import BaseHttpService from './base-http.service'

const apiClient =  BaseHttpService();

const getAll = async () => {
    return await apiClient.get(`products`);
}

const getById = async (id:number) => {
    return await apiClient.get(`products/${id}`);
}

const productServices = {
    getAll,
    getById,
}
export default productServices;