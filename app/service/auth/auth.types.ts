// ========================Request=====================
export type RegisterRequest = {
    name: string;
    email: string;
    password: string;
};

export type LoginRequest = {
    email: string;
    password: string;
};

export type VerifyOtpForLogin = {
    email: string;
    otp: string;
};

// =====================Response=======================
