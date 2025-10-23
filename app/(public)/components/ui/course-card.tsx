import Image from "next/image";
import { GradientHeading } from "./gradient-heading";

type Prop = {
    src: string;
    heading: string;
    paragraph: string;
    subheading: string;
    href: string;
};

export function CourseCard({
    src,
    heading,
    subheading,
    href,
    paragraph,
}: Prop) {
    return (
        <div className="p-4 h-full w-full bg-[#140217] flex flex-col gap-1 sm:gap-2 text-white rounded-2xl md:space-y-1 lg:space-y-4">
            {/* <img src={src} className="w-full sm" loading="lazy" /> */}

            <div className="relative w-full h-64">
                <Image
                    src={src}
                    alt={`${heading} studymento`}
                    fill
                    className="object-cover rounded-2xl"
                />
            </div>
            <h2 className=" font-bold text-[1rem] sm:text-[1.2rem] pt-1 sm:pt-4 leading-none">
                {heading}
            </h2>
            <p className=" font-normal text-sm leading-relaxed">{paragraph}</p>
            <GradientHeading
                tag="h3"
                text="Enroll in This Course Today"
                size="sm"
            />
        </div>
    );
}
