import React from "react";

type ButtonVariant =
    | "primary"
    | "secondary"
    | "outline"
    | "success"
    | "danger"
    | "ghost";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    variant?: ButtonVariant;
    disabled?: boolean;
    loading?: boolean;
    style?: string;
    type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = "primary",
    disabled = false,
    loading = false,
    style = "",
    type = "button",
}) => {
    const baseStyle =
        "px-4 py-2 rounded-md font-medium transition-all focus:outline-none focus:ring-2 cursor-pointer";

    const variantStyles: Record<ButtonVariant, string> = {
        primary:
            "bg-[#3E4070] text-white hover:bg-[#2F3160] focus:ring-[#3E4070]",
        secondary:
            "bg-[#E5E6F0] text-[#3E4070] hover:bg-[#D3D4E6] focus:ring-[#3E4070]",
        outline:
            "border border-[#3E4070] text-[#3E4070] hover:bg-[#F1F1F9] focus:ring-[#3E4070]",
        success:
            "bg-[#4CAF50] text-white hover:bg-[#43A047] focus:ring-[#4CAF50]",
        danger: "bg-[#E53935] text-white hover:bg-[#D32F2F] focus:ring-[#E53935]",
        ghost: "text-[#3E4070] bg-transparent hover:bg-[#EBEBF4] focus:ring-[#3E4070]",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseStyle} ${variantStyles[variant]} ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
            } ${style}`}
        >
            {loading ? "Loading..." : children}
        </button>
    );
};

export default Button;
