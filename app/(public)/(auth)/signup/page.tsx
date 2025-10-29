"use client";
import { ISignUpFormValues } from "@/app/validation/auth.validation";
import { signupSchema } from "@/app/validation/auth.validation";

import { useForm } from "react-hook-form";
import Input from "@/app/components/ui/text-input";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/app/components/ui/button";

import toast from "react-hot-toast";

import { authService } from "@/app/service";

export default function SignupPage() {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ISignUpFormValues>({
        resolver: zodResolver(signupSchema),
    });
    async function onSubmitHandler(signUpData: ISignUpFormValues) {
        const res = await authService.signup(signUpData);
        if (!res.success) {
            toast.error(res.message);
            return;
        }
        console.log("Api Response");
        reset();
        toast.success(res?.message);
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
                    className="!normal-case"
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
