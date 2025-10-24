import { Instrument_Serif_Font } from "@/app/lib/fonts";
import { GradientHeading } from "../ui/gradient-heading";
import Button from "@/app/components/ui/button";

import Link from "next/link";

type CardProp = {
    heading: string;
    headingColor: string;
    paragraph: string;
    btnText: string;
    btnLink: string;
    className: string;
};

const CardData: CardProp[] = [
    {
        heading: "Course Categories",
        headingColor: "text-[#FF6969]",
        paragraph:
            "Browse the full catalog and decide which specialization is right for you. Perfect for explorers.",
        btnText: "view course",
        btnLink: "/about",
        className:
            "bg-[#FF6969] text-white hover:bg-[#FF6969]/80 transition-all duration-200",
    },
    {
        heading: "Ready to commit",
        headingColor: "text-[#25FF71]",
        paragraph:
            "You know what you want! Skip the browsing and jump straight into the full course content.",
        btnText: "enroll course Today",
        btnLink: "/about",
        className:
            "bg-[#25FF71] text-gray-900 hover:bg-[#25FF71]/80 transition-all duration-200",
    },
    {
        heading: "Test the Waters",
        headingColor: "text-[#006AFF]",
        paragraph:
            "Get immediate access to a sample of the lessons before making a final commitment. Low risk, high reward.",
        btnText: "Start Free Trial",
        btnLink: "/about",
        className:
            "bg-[#006AFF] text-white hover:bg-[#006AFF]/80 transition-all duration-200",
    },
];
export function HomeInsideCourse() {
    return (
        <section className="space-y-4 pt-12 boxed">
            <GradientHeading
                whiteText="What's inside the"
                coloredText="Course?"
                tag="h3"
                size="md"
                className="text-center w-full  "
            />
            {/*
             */}
            <GradientHeading
                whiteText="“See Full Curriculum” "
                coloredText="Start Learning"
                tag="h3"
                size="md"
                className="text-center w-full "
            />
            <h2
                className={`${Instrument_Serif_Font.className} text-2xl sm:text-4xl text-center text-white`}
            >
                “Explore Modules & Bonuses”
            </h2>

            <div className="h-auto grid md:grid-cols-3 grid-cols-1 gap-4 lg:px-10 lg">
                {CardData.map((itm, idx) => (
                    <Card
                        key={idx}
                        heading={itm.heading}
                        headingColor={itm.headingColor}
                        paragraph={itm.paragraph}
                        btnText={itm.btnText}
                        btnLink={itm.btnLink}
                        className={itm.className}
                    />
                ))}
            </div>
        </section>
    );
}

function Card({
    heading,
    headingColor,
    paragraph,
    btnText,
    btnLink,
    className,
}: CardProp) {
    return (
        <div className="w-full  bg-[#140217]  rounded-2xl space-y-4 p-4">
            <h2
                className={`text-2xl md:text-xl lg:text-3xl font-semibold ${headingColor} `}
            >
                {heading}
            </h2>
            <p className="text-white line-clamp-2">{paragraph}</p>
            <Link
                href={btnLink}
                className={`w-full px-3 py-2 rounded-2xl ${className} block text-center capitalize `}
            >
                {btnText}{" "}
            </Link>
        </div>
    );
}
