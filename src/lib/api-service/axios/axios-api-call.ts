import axios from "axios";
import { APIService } from "../api-service";

export default class AxiosAPIService extends APIService {
  async get<T>(url: string): Promise<T> {
    const result = await axios.get<T>(url);
    return result.data;
  }

  async post<T>(url: string, options: any): Promise<T> {
    const response = await axios.post<T>(url, options);
    return response.data;
  }
}
