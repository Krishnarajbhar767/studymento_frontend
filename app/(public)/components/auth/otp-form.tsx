"use client";

import { useState } from "react";
import OtpInput from "react-otp-input";
import Button from "@/app/components/ui/button";
import toast from "react-hot-toast";
import { api } from "@/app/lib/utils/axios";
import { authEndpoints } from "@/app/lib/endpoints";
import { ApiResponse } from "@/app/types/general";

export function OtpVerificationForm({ email }: { email: string }) {
    const [otp, setOtp] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // restrict to digits only
    const handleChange = (value: string) => {
        const numeric = value.replace(/\D/g, ""); // remove letters, symbols, etc.
        setOtp(numeric);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (otp.length < 6) {
            toast.error("Please enter all 6 digits");
            return;
        }

        try {
            setIsSubmitting(true);
            // Call OTP Verification API
            const res: ApiResponse = await api.post(
                authEndpoints.verifyLoginOtp,
                {
                    email,
                    otp,
                }
            );
            // If Otp Verifying Successfull Fetch User  Data
            if (res.success) {
                const res: ApiResponse = await api.get(
                    authEndpoints.getProfile
                );
                toast.success(res.message);
                console.log("DEV: User Data After Login", res.data);
            }
        } catch (error: unknown) {
            const { message } = error as { message: string };
            toast.error(message || "Something went wrong.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
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

async function verifyOtpAndFetchProfile(email: string, otp: string) {
    const verify = await verifyLoginOtp(email, otp);
    if (!verify.success) throw new Error(verify.message);

    const profile = await fetchUserProfile();
    if (!profile.success) throw new Error(profile.message);

    return profile.data;
}
