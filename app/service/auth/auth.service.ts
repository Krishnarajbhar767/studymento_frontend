import { authEndpoints } from "@/app/lib/endpoints";
import { servicesWrapper } from "@/app/lib/helper.utils";
import { api, ApiResponse } from "@/app/lib/utils/axios";

import {
    LoginRequest,
    RegisterRequest,
    verifyOtpRequest,
    verifyOtpResponse,
} from "@/app/service";
import { BaseUser } from "@/app/types";
import axios from "axios";

export const authService = {
    signup: servicesWrapper(async (payload: RegisterRequest) => {
        const res: ApiResponse = await api.post(
            authEndpoints.register,
            payload
        );
        return res;
    }),
    login: servicesWrapper(async (payload: LoginRequest) => {
        const res: ApiResponse = await api.post(authEndpoints.login, payload);
        return res;
    }),
    verifyOtp: servicesWrapper(async (payload: verifyOtpRequest) => {
        const res: verifyOtpResponse = await api.post(
            authEndpoints.verifyOtp,
            payload
        );

        return res;
    }),
    getProfile: servicesWrapper(async () => {
        const res: ApiResponse<BaseUser> = await api.get(
            authEndpoints.getProfile
        );
        return res;
    }),
    verifyToken: servicesWrapper(async (token: string) => {
        const res: ApiResponse = await api.post(
            authEndpoints.verifyToken(token)
        );
        return res;
    }),
    refreshTokens: servicesWrapper(async (refreshToken?: string) => {
        const res = await axios.post<ApiResponse>(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}${authEndpoints.refreshToken}`,
            {},
            {
                withCredentials: true,
            }
        );
        return res?.data;
    }),
};
