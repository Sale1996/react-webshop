import { APIService } from "../api-service";
import AxiosAPIService from "../axios/axios-api-call";

const getAPIService = (): APIService => {
  return new AxiosAPIService();
};

export default getAPIService;
