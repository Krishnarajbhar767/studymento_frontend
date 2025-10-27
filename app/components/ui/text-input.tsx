import React from "react";
import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";
type Props = Readonly<{
    type?: "email" | "text" | "password";
    label: string;
    name: keyof FieldValues;
    initialValue?: string;
    placeholder?: string;
    register: UseFormRegister<any>;
    error: FieldErrors<FieldValues>;
    className?: string;
    children?: React.ReactNode;
}>;
function Input({
    type = "text",
    label,
    name,
    initialValue,
    placeholder,
    register,
    error,
    children,
    className,
}: Props) {
    return (
        <div className="flex flex-col gap-2 w-full ">
            {label && (
                <label
                    htmlFor={name}
                    className="text-sm font-medium text-neutral-700 tracking-wide"
                >
                    {label}
                </label>
            )}

            <div className="relative flex items-center">
                <input
                    id={name}
                    type={type || "text"}
                    defaultValue={initialValue || ""}
                    placeholder={placeholder || ""}
                    {...register(name)} // call the function  dynamically
                    className={`styled-input ${className}`}
                />

                {children && <div className="absolute right-2">{children}</div>}
            </div>

            {error?.[name] && (
                <span className="text-red-500 text-sm">
                    {(error?.[name]?.message as string) ||
                        "something went wrong"}
                </span>
            )}
        </div>
    );
}
export default Input;
