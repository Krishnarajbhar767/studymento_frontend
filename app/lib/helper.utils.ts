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
