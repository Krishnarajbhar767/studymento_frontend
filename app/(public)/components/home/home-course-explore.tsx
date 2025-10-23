import { CourseCard } from "@/app/(public)/components/ui/course-card";
import { Instrument_Serif_Font } from "@/app/lib/fonts";

import Link from "next/link";

type Course = {
    src: string;
    heading: string;
    paragraph: string;
    subheading: string;
    href: string;
};
const courseData: Course[] = [
    {
        src: "/Card.png",
        heading: "Crash Course: Learn in 30 Days",
        paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        subheading: "Enroll in This Course Today",
        href: "/home",
    },
    {
        src: "/Card.png",
        heading: "Crash Course: Learn in 30 Days",
        paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        subheading: "Enroll in This Course Today",
        href: "/home",
    },
    {
        src: "/Card.png",
        heading: "Crash Course: Learn in 30 Days",
        paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        subheading: "Enroll in This Course Today",
        href: "/home",
    },
];
export function HomeCourseExplore() {
    return (
        <section className="boxed px-0 md:px-0 lg:px-10 space-y-6 py-6">
            <h2 className="text-white font-bold text-2xl sm:text-4xl text-center">
                Course Categories / Explore Courses
            </h2>
            <h3
                className={`${Instrument_Serif_Font.className} text-white italic text-xl sm:text-4xl tracking-wider text-center`}
            >
                Start Free Trial → Pick Your Favorite
            </h3>
            <div className="w-full  grid grid-cols-1 sm:grid-cols-3 gap-4">
                {courseData.map((itm, idx) => (
                    <Link href={itm.href} key={idx}>
                        <CourseCard
                            src={itm.src}
                            heading={itm.heading}
                            paragraph={itm.paragraph}
                            subheading={itm.subheading}
                            href={itm.href}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}
