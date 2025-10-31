// zustand-store/auth.ts

import { create } from "zustand";

import { devtools } from "zustand/middleware";
import { BaseUser } from "../types";

interface IAuthState {
    // 1. State Properties
    user: BaseUser | null;
    accessToken: string | null;
    refreshToken: string | null;
    isLoggedIn: boolean; // Derived state for convenience (optional, but helpful)
    // 2. Actions (Functions to modify state)
    login: (userData: BaseUser) => void;
    logout: () => void;
    setAccessToken: (token: string | null) => void; // Utility function
    setRefreshToken: (refreshToken: string | null) => void; // Utility function
}

export const useUserStore = create<IAuthState>()(
    devtools((set) => ({
        // Initial State
        user: null,
        accessToken: null,
        refreshToken: null,
        isLoggedIn: false, // Initially false
        // Actions
        login: (userData) =>
            set({
                user: userData,
                isLoggedIn: true,
            }),
        logout: () =>
            set({
                accessToken: null,
                user: null,
                isLoggedIn: false,
            }),
        setAccessToken: (token) =>
            set({
                accessToken: token,
                isLoggedIn: !!token, // Set isLoggedIn based on token presence
            }),
        setRefreshToken: (refreshToken) =>
            set({
                refreshToken: refreshToken,
                isLoggedIn: !!refreshToken,
            }),
    }))
);
