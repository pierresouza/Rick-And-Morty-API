import axios, { AxiosError } from "axios";
import { RequestProps } from "./types";
export class RemoteService {
  static async request<T>({
    body,
    headers,
    method,
    params,
    resource,
  }: RequestProps) {
    const api = axios.create({
      baseURL: "https://rickandmortyapi.com/",
    });
    switch (method) {
      default:
      case "GET":
        try {
          return await api.get<T>(resource, { headers, params });
        } catch (err) {
          const error = err as AxiosError;
          if (error.code !== "ERR_NETWORK") {
            throw new Error(JSON.stringify(error.response));
          } else {
            throw new Error(JSON.stringify(error));
          }
        }
      case "POST":
        try {
          return await api.post<T>(resource, body, {
            headers,
            params,
          });
        } catch (err) {
          const error = err as AxiosError;
          if (error.code !== "ERR_NETWORK") {
            throw new Error(JSON.stringify(error.response));
          } else {
            throw new Error(JSON.stringify(error));
          }
        }
      case "PUT":
        try {
          return await api.put<T>(resource, body, {
            headers,
            params,
          });
        } catch (err) {
          throw new Error(JSON.stringify((err as AxiosError).response));
        }
      case "PATCH":
        try {
          return await api.patch<T>(resource, body, {
            headers,
            params,
          });
        } catch (err) {
          throw new Error(JSON.stringify((err as AxiosError).response));
        }
    }
  }
}
