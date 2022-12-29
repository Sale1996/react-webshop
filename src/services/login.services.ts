import { UserCredentials } from "context/account/AccountProvider";
import BaseHttpService from "./base-http.service";

const apiClient = BaseHttpService();

const login = async (userCredentials: UserCredentials) => {
  return await apiClient.post(`auth/login`, userCredentials);;
};

const loginServices = {
  login,
};

export default loginServices;
