import axios, { AxiosError } from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
    withCredentials: true,
});

api.interceptors.response.use(
    (res) => res.data,
    (err) => Promise.reject(err?.response?.data || err)
);

// Api Response
export type ApiResponse<T = unknown> =
    | {
          success: true;
          message: string;
          data: T;
      }
    | {
          success: false;
          message: string;
          status: number;
          data: null;
          error: any;
      };
