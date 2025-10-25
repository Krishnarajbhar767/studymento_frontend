import { Instrument_Serif_Font } from "@/app/lib/fonts";

export function HomeTestomonial() {
    return (
        <section className="boxed  lg:px-10">
            <h2 className="text-white font-bold text-2xl sm:text-4xl text-center capitalize">
                See how students are Earning join them
            </h2>
            <h3
                className={`${Instrument_Serif_Font.className} text-white italic text-xl sm:text-4xl tracking-wider text-center`}
            >
                I Want to Achieve This Too
            </h3>
        </section>
    );
}
