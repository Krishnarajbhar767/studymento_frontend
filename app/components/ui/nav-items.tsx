import { TNavLinks } from "@/app/types/general.types";
import { LucideX } from "lucide-react";
import Link from "next/link";
import Button from "./button";

type NavItemsProps = {
    Links: TNavLinks;
    isMobile?: boolean;

    closeMobileMenu?: () => void;
};

export default function NavItems({
    Links,
    isMobile = false,

    closeMobileMenu,
}: NavItemsProps) {
    if (isMobile) {
        // Mobile Menu
        return (
            <div className="fixed inset-0 bg-gradient-to-r  from-[#1C181D] to-[#190202] text-white flex flex-col items-center justify-center gap-6 z-50">
                <div className="">
                    <LucideX
                        size={30}
                        className="font-black border border-black"
                        onClick={closeMobileMenu}
                    />
                </div>
                {Links.map((itm) => (
                    <Link
                        href={itm.href}
                        key={itm.name}
                        className="text-lg font-medium hover:text-[#3E4070] transition"
                    >
                        {itm.name}
                    </Link>
                ))}
                <div className="space-x-4">
                    <Link href={"/login"} className="">
                        <Button variant="primary" className="">
                            Login
                        </Button>
                    </Link>
                    {/* Sign uP BUTTON  */}
                    <Link href={"/signup"} className="">
                        <Button
                            variant="secondary"
                            className=" gap-2 item-center "
                        >
                            Sign up
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    // Desktop Menu
    return (
        <div className="hidden sm:flex items-center gap-6 text-[1rem] font-normal">
            {Links.map((itm) => (
                <Link
                    href={itm.href}
                    key={itm.name}
                    className="hover:text-[#B0B1D2] transition"
                >
                    {itm.name}
                </Link>
            ))}
        </div>
    );
}
