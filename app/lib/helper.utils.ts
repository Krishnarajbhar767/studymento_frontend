import { ApiResponse } from "./utils/axios";
import { setCookie } from "cookies-next";
type CallbackFunction = (...args: any[]) => void;

// ==================Make Your Function Debounced===================
export function debounce(
    func: CallbackFunction,
    delay = 500
): CallbackFunction {
    let timer: ReturnType<typeof setTimeout>;
    return function (...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
}
// ==================Make Your Function Throttle===================
export function throttle(
    func: CallbackFunction,
    delay = 500
): CallbackFunction {
    // run Only  Once  When  Period  Ends
    let isThrottling = false;
    return function (...args: any[]) {
        if (!isThrottling) {
            func(...args);
            isThrottling = true;
            setTimeout(() => (isThrottling = false), delay);
        }
    };
}
// ======================= Wrap Serverces In Try And Catch And Send Consitant ================
export function servicesWrapper<T extends (...args: any[]) => any>(
    func: T
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
    return async function (...args: Parameters<T>) {
        try {
            return await func(...args);
        } catch (error: any) {
            // If Error Comes From Server  Then  Structure Should Be  ApiResponse, Other Wise Show Then  Something Went Wrong

            const response = {
                success: error?.success as string,
                message: (error?.message as string) || "Internal server error",
                status: (error.status as number) || 500,
                data: null,
            };
            console.log("Formatted Error Response =>", response);
            console.log("Raw And Real Api Error Response =>", error);
            return response;
        }
    };
}

// Helper function to set options (temporary for testing)
// 1. Helper function to create the Date object for 'expires'
const getCookieOptions = (isRefreshToken: boolean) => {
    const now = new Date();
    let expirationDate = new Date();

    if (isRefreshToken) {
        // 30 days expiry for Refresh Token (30 * 24 hours * 60 minutes * 60 seconds * 1000 ms)
        expirationDate.setTime(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    } else {
        // 1 hour expiry for Access/CSRF Token (60 minutes * 60 seconds * 1000 ms)
        expirationDate.setTime(now.getTime() + 60 * 60 * 1000);
    }

    return {
        // 'expires' expects a Date object in cookies-next
        expires: expirationDate,

        // TEMPORARY: Set secure to false for local HTTP testing
        secure: false,

        // Use 'Lax' for better local testing compatibility
        sameSite: "lax" as const,
        path: "/",
    };
};

//Get Tokens  And Set Where You Want To Save Cookies Or Local Storage
// Assuming setCookie and getCookieOptions are defined and imported
// import { setCookie } from 'cookies-next';

export function setTokensInCookies({
    accessToken,
    refreshToken,
    csrfToken,
}: {
    accessToken?: string;
    csrfToken?: string;
    refreshToken?: string;
}): void {
    // 1. Set Access Token (Short-lived)
    if (accessToken) {
        setCookie(
            "accessToken",
            accessToken,
            getCookieOptions(false) // false indicates Access/CSRF token options
        );
    }

    // 2. Set CSRF Token (Short-lived)
    if (csrfToken) {
        setCookie("csrfToken", csrfToken, getCookieOptions(false));
    }

    // 3. Set Refresh Token (Long-lived)
    if (refreshToken) {
        setCookie(
            "refreshToken",
            refreshToken,
            getCookieOptions(true) // true indicates Refresh Token options
        );
    }

    // This function returns void (nothing)
    return;
}
