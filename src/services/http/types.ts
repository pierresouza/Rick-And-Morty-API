interface AxiosRequestHeaders {
  [key: string]: string;
}

export type HTTPMethods =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "OPTIONS";

export interface RequestProps {
  method: HTTPMethods;
  resource: string;
  params?: Record<string, unknown>;
  body?: unknown;
  headers?: AxiosRequestHeaders;
}
