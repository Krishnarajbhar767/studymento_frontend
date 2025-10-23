import { Instrument_Serif_Font } from "@/app/lib/fonts";
import { GradientHeading } from "../ui/gradient-heading";
import Image from "next/image";

export function HomeHero() {
    return (
        <section className="text-white text-center py-24 relative  overflow-hidden">
            <div className="space-y-4">
                <h2
                    className={`${Instrument_Serif_Font.className} text-2xl sm:text-5xl`}
                >
                    Start Learning Today
                </h2>

                <GradientHeading
                    size="xl"
                    text="Unlock Your First Course"
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
                    <GradientHeading text="Start Earning" tag="span" />
                </h5>
            </div>
            <div className="relative h-[28rem] sm:h-[32rem]">
                <Image
                    fill
                    className="object-contain"
                    src={"/home/the_complete_creator_studymento.png"}
                    alt="the_complete_creator_studymento"
                />
            </div>

            {/* Gradial  Linear gradient  */}
            <div className="absolute z-0 -top-40 -right-30 rotate-[160]">
                <img
                    src="/radial_gradient.png"
                    className="w-[500px] h-[500px] rounded-full border border-white object-center object-cover"
                />
            </div>
        </section>
    );
}
