import axios, { AxiosError } from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
    withCredentials: true,
});

api.interceptors.response.use(
    (res) => res.data,
    (err) => Promise.reject(err?.response?.data || err)
);
