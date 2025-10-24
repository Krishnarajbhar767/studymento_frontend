import { Instrument_Serif_Font } from "@/app/lib/fonts";
import { GradientHeading } from "../ui/gradient-heading";
import Image from "next/image";
import SmartPhoneImage from "@/public/home/the_complete_creator_studymento.png";
import { Gradient } from "@/app/(public)/components/ui/gradient";

export function HomeHero() {
    return (
        <section className="text-white text-center pt-12 relative  overflow-hidden">
            <div className="space-y-4 z-10 bg-transparent">
                <h2
                    className={`${Instrument_Serif_Font.className} text-2xl sm:text-5xl`}
                >
                    Start Learning Today
                </h2>

                <GradientHeading
                    size="xl"
                    coloredText="Unlock Your First Course"
                    tag="h3"
                    className="mx-auto"
                />
                <h4 className="text-xl sm:text-3xl font-medium leading-none">
                    Join 10,000+ “Students Growing Their Skills”
                </h4>

                <h5
                    className={`${Instrument_Serif_Font.className}   text-2xl sm:text-4xl`}
                >
                    Get Instant Access &{" "}
                    <GradientHeading coloredText="Start Earning" tag="span" />
                </h5>
            </div>
            <div className="relative h-[28rem] sm:h-[32rem] mt-10 z-10 bg-transparent">
                <Image
                    fill
                    className="object-contain"
                    src={SmartPhoneImage}
                    alt="the_complete_creator_studymento"
                />
            </div>

            {/* Gradial  Linear gradient  */}
            <Gradient className="top-10 sm:-top-40 -right-30 rotate-0 sm:-rotate-[45deg] " />
            <Gradient className="bottom-5 sm:bottom-10 -left-50    rotate-180 " />
        </section>
    );
}
