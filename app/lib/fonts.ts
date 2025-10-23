import { Instrument_Serif, Hind_Madurai } from "next/font/google";

export const Hind_Madurai_Font = Hind_Madurai({
    subsets: ["latin"],
    variable: "--font-body",
    weight: ["300", "400", "500", "600", "700"],
    fallback: ["arial"],
});

export const Instrument_Serif_Font = Instrument_Serif({
    subsets: ["latin"],
    variable: "--font-heading",
    style: "italic",
    weight: "400",
});
