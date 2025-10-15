"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./components/ui/text-input";
import { ILoginFormInput, loginSchema } from "./validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDevice } from "./hooks/useDevice";

export default function Home() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "example@gmail.com",
            password: "something your password",
        },
        resolver: zodResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<ILoginFormInput> = (data) => {
        console.log("FORM DATA", data);
    };

    const device = useDevice();

    return (
        <main>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Input
                        name="email"
                        placeholder="e.g - Krishana"
                        label="Please enter your name"
                        register={register}
                        error={errors}
                    />
                    <Input
                        name="username"
                        placeholder="e.g - @username"
                        label="Please enter your @username"
                        register={register}
                        error={errors}
                    />
                </div>
                <Input
                    name="password"
                    placeholder="e.g - Krishana"
                    label="Please enter your name"
                    register={register}
                    error={errors}
                />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </main>
    );
}
