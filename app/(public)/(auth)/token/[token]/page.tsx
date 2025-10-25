import { api } from "@/app/lib/utils/axios";
import { ApiResponse } from "@/app/types/general";
import { AxiosError } from "axios";

export default async function VerifyPage({
    params,
}: {
    params: { token: string };
}) {
    // get token from url
    const { token } = await params;
    try {
        const res: ApiResponse = await api.post(`/auth/user/verify/${token}`);
        if (res?.success) {
            return <h2>Your Account Verfied Successfully.</h2>;
        } else return <h2>Account verification Failed</h2>;
    } catch (error) {
        return <h2>Something went wrong please try again later</h2>;
    }
}
