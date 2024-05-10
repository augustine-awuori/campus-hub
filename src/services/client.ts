import { ApiResponse, create } from "apisauce";

import cache from '../utils/cache';

const apiClient = create({
  baseURL: "https://campus-hub-api.onrender.com/api",
});

const get = apiClient.get;
apiClient.get = async <T, U>(
  url: string,
  params: object | undefined,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  axiosConfig: any
): Promise<ApiResponse<T, U>> => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response as ApiResponse<T, U>;
  }

  const data = await getCacheData<T>(url);
  return (data ? { ok: true, data } : response) as ApiResponse<T, U>;
};

export async function getCacheData<T>(url: string) {
  return ((await cache.get(url)) || []) as T[];
}

export interface DataError {
  error?: string;
}

export interface Response {
  data: unknown;
  problem: string | null;
  ok: boolean;
}

export default apiClient;
