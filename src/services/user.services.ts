import BaseHttpService from "./base-http.service";

const apiClient = BaseHttpService();

const getAll = async () => {
  return await apiClient.get(`users`);
};

const getById = async (id: number) => {
  return await apiClient.get(`users/${id}`);
};

const userServices = {
  getAll,
  getById,
};

export default userServices;
