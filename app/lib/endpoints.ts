// Type Of All Routes
type TRoutes = Record<string, string | ((...args: any[]) => string)>;
// Utility To Craete  Routes That Should  Be Readonly
const makeRoutes = <T extends TRoutes>(
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
export const AUTH_EP = makeRoutes("/auth/user", {
    register: "/register",
    verifyToken: (token: string) => `/verify/${token}`,
    login: "/login",
    verifyLoginOtp: "/verify",
});
