import React from "react";

type Props = {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    coloredText?: string;
    whiteText?: string;
    size?: "sm" | "md" | "lg" | "xl";
    className?: string; // for extra flexibility
};

export function GradientHeading({
    tag,
    coloredText = "",
    whiteText = "",
    size = "md",
    className = "",
}: Props) {
    const Tag = tag as keyof React.JSX.IntrinsicElements;

    const sizeClasses = {
        sm: "text-base sm:text-lg",
        md: "text-2xl sm:text-3xl md:text-4xl",
        lg: "text-3xl sm:text-4xl md:text-5xl",
        xl: "text-3xl sm:text-5xl md:text-6xl lg:text-7xl",
    };
    // const sizeClasses = {
    //     sm: "text-sm sm:text-base md:text-lg", // smaller devices scale gently
    //     md: "text-lg sm:text-xl md:text-2xl lg:text-3xl", // tablets don’t blow up
    //     lg: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    //     xl: "text-2xl sm:text-3xl md:text-5xl lg:text-6xl", // big screens still feel big
    // };

    if (whiteText) {
        return (
            <Tag
                className={`text-white font-bold leading-none ${sizeClasses[size]} ${className}`}
            >
                {whiteText}{" "}
                <span className="bg-gradient-to-r from-[#FFAE00] to-[#990094] bg-clip-text text-transparent ">
                    {coloredText}
                </span>
            </Tag>
        );
    } else {
        return (
            <Tag
                className={`
        bg-gradient-to-r from-[#FFAE00] to-[#990094]
        font-bold leading-none w-fit bg-clip-text text-transparent ${sizeClasses[size]} ${className}`}
            >
                {coloredText}
            </Tag>
        );
    }
}
