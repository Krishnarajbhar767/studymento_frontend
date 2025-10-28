// Type Of All Routes
type TRoutes = Record<string, string | ((...args: any[]) => string)>;
// Utility To Craete  Routes That Should  Be Readonly
export const makeRoutes = <T extends TRoutes>(
    BASE_URL: string,
    routes: T
): Readonly<T> => {
    const result: TRoutes = {};
    for (const [key, value] of Object.entries(routes)) {
        result[key] =
            typeof value === "function"
                ? (...args: any[]) => BASE_URL + value(...args)
                : BASE_URL + value;
    }
    return Object.freeze(result) as Readonly<T>;
};

// ========================AUTH====================
export const authEndpoints = makeRoutes("/auth/user", {
    register: "/register",
    login: "/login",
    logout: "/logout",
    verifyLoginOtp: "/verify",
    getProfile: "/profile",
    refreshToken: "/refresh",
    refreshCsrf: "/refresh-csrf",
    forgotPassword: "/forgot-password",
    verifyToken: (token: string) => `/verify/${token}`,
    resetPassword: (token: string) => `/reset-password/${token}`,
});

// authEndpoints
