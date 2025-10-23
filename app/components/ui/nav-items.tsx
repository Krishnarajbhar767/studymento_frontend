import { TNavLinks } from "@/app/types/general";
import { LucideX } from "lucide-react";
import Link from "next/link";

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
            <div className="fixed inset-0 bg-white text-gray-800 flex flex-col items-center justify-center gap-6 z-50">
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
