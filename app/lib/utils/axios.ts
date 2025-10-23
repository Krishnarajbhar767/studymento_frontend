import axios, { AxiosError } from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_BACKEND_URL,
    withCredentials: true,
});

api.interceptors.response.use(
    (res) => res.data,
    async function (err) {
        if (err?.response?.status === 401) {
            console.log("Auth Error");
        } else {
            Promise.reject(err);
        }
    }
);
