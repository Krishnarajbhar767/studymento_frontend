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

export type verifyOtpRequest = {
    email: string;
    otp: string;
};

// =====================Response=======================
