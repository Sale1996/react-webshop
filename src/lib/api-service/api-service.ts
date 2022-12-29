export abstract class APIService {
  abstract get<T>(url: string): Promise<T>;
  abstract post<T>(url: string, options: Object): Promise<T>;
}
