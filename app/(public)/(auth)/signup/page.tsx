"use client";
import { ISignUpFormValues } from "@/app/validation/auth.validation";
import { signupSchema } from "@/app/validation/auth.validation";

import { useForm } from "react-hook-form";
import Input from "@/app/components/ui/text-input";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/app/components/ui/button";
import { useState } from "react";
import { ApiResponse } from "@/app/types/general";
import { api } from "@/app/lib/utils/axios";
import toast from "react-hot-toast";

export default function SignupPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<ISignUpFormValues>({
        resolver: zodResolver(signupSchema),
    });
    async function onSubmitHandler(signUpData: ISignUpFormValues) {
        setIsSubmitting(true);
        try {
            const res: ApiResponse = await api.post(
                "/auth/user/register",
                signUpData
            );
            reset();
            toast.success(res.message);
        } catch (err: unknown) {
            const error = err as { message?: string };
            toast.error(error?.message || "Something went wrong");
        } finally {
            setIsSubmitting(false);
        }
    }
    return (
        <main>
            <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="boxed space-y-4 p-4 max-w-[500px]"
            >
                <Input
                    label="Full Name*"
                    name="name"
                    register={register}
                    error={errors}
                    placeholder="eg - Krishna Rajbhar"
                />
                <Input
                    type="email"
                    label="Email*"
                    name="email"
                    register={register}
                    error={errors}
                    placeholder="eg - example@email.com"
                />
                <Input
                    label="Password*"
                    name="password"
                    register={register}
                    error={errors}
                    placeholder="eg - Krish@111"
                />
                <Button
                    type="submit"
                    className="block mx-auto"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : "Signup"}
                </Button>
            </form>
        </main>
    );
}
