import { TRole } from "../types/general";
import { create } from "zustand";
import { persist } from "zustand/middleware";
interface IUser {
    _id: string;
    role: TRole;
}

interface IAuthState {
    user: IUser | null;
    accessToken: string | null;
    login: (user: IUser, accessToken: string) => void;
    logout: () => void;
}

export const useUserStore = create<IAuthState>((set) => ({
    user: null,
    accessToken: null,
    login(user, accessToken) {
        set({ user, accessToken });
    },
    logout() {
        set({
            accessToken: null,
            user: null,
        });
    },
}));
