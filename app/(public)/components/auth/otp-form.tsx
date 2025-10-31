"use client";

import { useState } from "react";
import OtpInput from "react-otp-input";
import Button from "@/app/components/ui/button";
import toast from "react-hot-toast";
import { useUserStore } from "@/app/store/auth.store";

import { authService } from "@/app/service";
import { useForm } from "react-hook-form";
import { setTokensInCookies } from "@/app/lib/helper.utils";

export function OtpVerificationForm({ email }: { email: string }) {
    const { setAccessToken, setRefreshToken, login } = useUserStore();
    const [otp, setOtp] = useState("");
    const {
        formState: { isSubmitting },
        handleSubmit,
    } = useForm();

    // OTP Change Function Handler
    // restrict to digits only
    const handleChange = (value: string) => {
        const numeric = value.replace(/\D/g, ""); // remove letters, symbols, etc.
        setOtp(numeric);
    };
    // Verify Otp And Login Handler
    const onSubmitHandler = async () => {
        // verify Otp  And  Login
        const otpRes = await authService.verifyOtp({ email, otp });
        if (!otpRes.success) {
            toast.error(otpRes.message);
            return;
        }
        setAccessToken(otpRes.accessToken);
        const profileRes = await authService.getProfile();
        if (!profileRes.success) {
            toast.error(profileRes.message);
            return;
        }
        login(profileRes?.data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="flex flex-col items-center gap-6 p-4 border"
        >
            <p className="text-gray-600 text-sm text-center">
                Enter the 6-digit code sent to{" "}
                <span className="font-medium">{email}</span>
            </p>

            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                shouldAutoFocus
                inputType="tel"
                renderSeparator={<span className="mx-2 text-gray-400 ">-</span>}
                renderInput={(props) => (
                    <input
                        {...props}
                        className="w-[50px] h-[50px] overflow-hidden border border-gray-400  flex items-center justify-center text-gray-800 text-4xl focus:outline-1 focus:outline-gray-700"
                    />
                )}
            />

            <Button
                type="submit"
                disabled={isSubmitting || otp.length < 6}
                className="w-full max-w-xs"
            >
                {isSubmitting ? "Verifying..." : "Submit"}
            </Button>
        </form>
    );
}
