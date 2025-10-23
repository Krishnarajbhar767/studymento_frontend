import { useUserStore } from "@/app/store/user";
import { api } from "./axios";

export async function tryAutoLogin() {
    useUserStore();
    try {
        const { data } = await api.post("/auth/refresh");
        const { user, accessToken } = data;
        useUserStore().login(user, accessToken);
    } catch (error) {
        // Do Nothing
    }
}
