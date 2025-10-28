import { TRole } from "../types/general";
import { create } from "zustand";
import { persist } from "zustand/middleware";
interface IUser {
    _id: string;
    role: TRole;
}

interface IAuthState {
    user: IUser | null;
}

export const useUserStore = create<IAuthState>((set) => ({
    user: null,
    accessToken: null,
}));
