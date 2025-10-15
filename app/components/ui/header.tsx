"use client";
import { useDevice } from "@/app/hooks/useDevice";
import NavItems from "./nav-items";
import { TNavLinks } from "@/app/types/general";
import { Logo } from "./logo";

const navLinks: TNavLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

// Logo Size =

export default function Header() {
    return (
        <header className="bg-gradient-to-r  from-[#1C181D] to-[#190202] text-white shadow-md h-20 ">
            <nav className="boxed flex items-center justify-between h-full w-full  ">
                {/* LOGO */}
                <Logo />
                {/* Nav ITEMS Links And  CTA BUTTON */}
                <NavItems Links={navLinks} />
            </nav>
        </header>
    );
}
