"use client";

import { useState } from "react";

import toast from "react-hot-toast";
import { LoginForm } from "../../components/auth/login-form";
import { OtpVerificationForm } from "../../components/auth/otp-form";

export default function LoginPage() {
    const [stage, setStage] = useState<"login" | "otp">("login");
    const [userEmail, setUserEmail] = useState("");
    return (
        <main className="boxed p-4">
            {stage === "otp" ? (
                <OtpVerificationForm email={userEmail} />
            ) : (
                <LoginForm setEmail={setUserEmail} setStage={setStage} />
            )}
        </main>
    );
}
