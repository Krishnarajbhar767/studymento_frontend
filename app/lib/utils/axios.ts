import { useUserStore } from "@/app/store/auth.store";
import axios, {
    AxiosError,
    AxiosRequestConfig,
    InternalAxiosRequestConfig,
} from "axios";

import { authEndpoints } from "../endpoints";
import { authService } from "@/app/service";
import toast from "react-hot-toast";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
    withCredentials: true,
});

// 1. Get the current state of your token from memory

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const accessToken = useUserStore.getState().accessToken;
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

api.interceptors.response.use(
    (res) => res.data,
    async (err: AxiosError) => {
        // get Zustand States For  Set Token  ETC
        const { logout } = useUserStore.getState();
        // get Origanl Request That Is Failed
        const originalRequest = err.config as AxiosRequestConfig & {
            _retry?: boolean;
        };
        if (err?.response?.status === 401 && !originalRequest?._retry) {
            originalRequest._retry = true; // This Say Yes i Retried The Request
            const res = await authService.refreshTokens();
            if (res.success) {
                // TODO : insert New Access Token In Origanl Request Header
                // TODO : Set New Access Token In Zustand store
                return api(originalRequest);
            } else {
                // if api refresh failed just simply  logout
                logout();
                toast.error("Session expired.");
            }
        }

        return Promise.reject(err?.response?.data || err);
    }
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
