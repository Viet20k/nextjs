import axios, { AxiosResponse } from "axios";

export async function fetcherB2B<T>(config: {
  method: any;
  url: string;
  data?: {};
}): Promise<T> {
  const apiClient = axios.create({
    method: config.method,
    url: config.url,
  });
  return new Promise<T>((resolve, reject) => {
    apiClient
      .request(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
