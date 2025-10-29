import { authEndpoints } from "@/app/lib/endpoints";
import { servicesWrapper } from "@/app/lib/helper.utils";
import { api, ApiResponse } from "@/app/lib/utils/axios";

import { LoginRequest, RegisterRequest, verifyOtpRequest } from "@/app/service";
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
        const res: ApiResponse = await api.post(
            authEndpoints.verifyOtp,
            payload
        );
        console.log("OTP VERIFICATION Response", res);
        return res;
    }),
    getProfile: servicesWrapper(async () => {
        const res: ApiResponse = await api.get(authEndpoints.getProfile);
        return res;
    }),
    verifyToken: servicesWrapper(async (token: string) => {
        const res: ApiResponse = await api.post(
            authEndpoints.verifyToken(token)
        );
        return res;
    }),
};
