import React from "react";

type Props = {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    text: string;
    size?: "sm" | "md" | "lg" | "xl";
    className?: string; // for extra flexibility
};

export function GradientHeading({
    tag,
    text,
    size = "md",
    className = "",
}: Props) {
    const Tag = tag as keyof React.JSX.IntrinsicElements;

    const sizeClasses = {
        sm: "text-base sm:text-lg",
        md: "text-xl sm:text-2xl md:text-3xl",
        lg: "text-3xl sm:text-4xl md:text-5xl",
        xl: "text-3xl sm:text-6xl md:text-7xl",
    };

    return (
        <Tag
            className={`
        bg-gradient-to-r from-[#FFAE00] to-[#990094]
        font-bold leading-none w-fit bg-clip-text text-transparent 

        ${sizeClasses[size]} ${className}
      `}
        >
            {text}
        </Tag>
    );
}
