import { ApiResponse } from "./utils/axios";

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

export function servicesWrapper<
    T extends (...args: any[]) => Promise<ApiResponse<any>>,
>(func: T) {
    return async (...args: Parameters<T>): Promise<ApiResponse<any>> => {
        try {
            const res = await func(...args);
            return res;
        } catch (error: any) {
            console.error("API Error: DEV", error);
            return {
                success: false,
                message:
                    error?.response?.data?.message ||
                    error?.message ||
                    "Something went wrong.",
            };
        }
    };
}
