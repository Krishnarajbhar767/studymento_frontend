import BonusImage from "@/public/home/course_bonus_studymento.svg";
import Placeholder from "@/public/placeholder.png";
import Image from "next/image";
import { GradientHeading } from "../ui/gradient-heading";
import Button from "@/app/components/ui/button";
export function HomeBonus() {
    return (
        <div className="w-full   grid gap-8 sm:gap-4  grid-cols-1 md:grid-cols-2 boxed py-12 lg:px-10  ">
            {/* Content  Section  */}
            <div className="space-y-2  my-auto">
                <GradientHeading
                    whiteText="Claim Your"
                    coloredText="Bonus Now"
                    tag="h3"
                    size="md"
                    className="text-center w-full"
                />
                <GradientHeading
                    whiteText="Get These Extra Tools "
                    tag="h3"
                    size="md"
                    className="text-center w-full  "
                />
                <GradientHeading
                    coloredText="Free With Enrollment"
                    tag="h3"
                    size="md"
                    className="text-center w-full  "
                />

                <Button className="mx-auto block">
                    I Want to Achieve This Too
                </Button>
            </div>
            {/* Image   */}
            <div className="w-full  h-[300px] md:h-[360px] lg:h-[450px] overflow-hidden relative  ">
                <Image
                    src={BonusImage}
                    alt="course bonuses in study mento premium course "
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
}
