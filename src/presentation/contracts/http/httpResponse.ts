export type httpResponse<T = any> = {
  statusCode:number;
  body: T;
}

