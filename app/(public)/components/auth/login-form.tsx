"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "@/app/components/ui/button";
import Input from "@/app/components/ui/text-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { ILoginValues, loginSchema } from "@/app/validation/auth.validation";
import { AUTH_EP } from "@/app/lib/endpoints";
import { api } from "@/app/lib/utils/axios";
import { ApiResponse } from "@/app/types/general";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Props = {
    setEmail: Dispatch<SetStateAction<string>>;
    setStage: Dispatch<SetStateAction<"otp" | "login">>;
};
export function LoginForm({ setEmail, setStage }: Props) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<ILoginValues>({
        resolver: zodResolver(loginSchema),
    });
    // function
    const loginHandler = async (loginData: ILoginValues) => {
        try {
            setIsSubmitting(true);
            const res: ApiResponse = await api.post(AUTH_EP.login, loginData);
            setEmail(loginData.email);
            setStage("otp");
            toast.success(res.message);
        } catch (error: unknown) {
            const err = error as { message: string };
            toast.error(err?.message || "Something went wrong");
        } finally {
            setIsSubmitting(false);
        }
    };
    const togglePassword = () => setShowPassword((prev) => !prev);
    return (
        <form className="space-y-4 " onSubmit={handleSubmit(loginHandler)}>
            <Input
                type="email"
                label="Email*"
                name="email"
                register={register}
                error={errors}
                placeholder="eg - example@email.com"
            />

            <Input
                type={showPassword ? "text" : "password"}
                label="Password*"
                name="password"
                register={register}
                error={errors}
                placeholder="eg - Krish@111"
                className="!normal-case"
            >
                <div
                    onClick={togglePassword}
                    aria-label="Toggle password visibility"
                    className="absolute top-1/2 right-2 -translate-y-1/2  cursor-pointer transition-all duration-200 text-gray-500"
                >
                    {showPassword ? <Eye size={25} /> : <EyeOff size={25} />}
                </div>
            </Input>

            <Button
                type="submit"
                className="block mx-auto"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Submitting..." : "Signup"}
            </Button>
        </form>
    );
}
