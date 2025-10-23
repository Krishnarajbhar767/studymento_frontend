"use client";
import { useDevice } from "@/app/hooks/useDevice";
import NavItems from "./nav-items";
import { TNavLinks } from "@/app/types/general";
import { Logo } from "./logo";
import Button from "./button";
import { LucideMenu } from "lucide-react";
import { useState } from "react";

const navLinks: TNavLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard/admin" },
];

// Logo Size =

export default function Header() {
    const device = useDevice();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    function toggaleMobileMenu() {
        setIsMobileMenuOpen((p) => !p);
        console.log("Is MObile Menu Open Or Not", isMobileMenuOpen);
    }
    return (
        <header className="bg-gradient-to-r  from-[#1C181D] to-[#190202] text-white shadow-md h-20 relative ">
            <nav className="boxed flex items-center justify-between h-full w-full  px-4">
                {/* LOGO */}
                <Logo />
                {/* Nav ITEMS Links And  CTA BUTTON */}

                <div className="flex gap-4 items-center relative">
                    {device === "mobile" ? (
                        isMobileMenuOpen ? (
                            <NavItems
                                Links={navLinks}
                                isMobile={isMobileMenuOpen}
                                closeMobileMenu={toggaleMobileMenu}
                            />
                        ) : (
                            <LucideMenu size={24} onClick={toggaleMobileMenu} />
                        )
                    ) : (
                        <NavItems Links={navLinks} />
                    )}

                    {/*  Sign Up And Login Container*/}
                    <div className=" gap-4 sm:flex hidden">
                        <Button variant="primary">Login</Button>
                        {/* Sign uP BUTTON  */}
                        <Button
                            variant="secondary"
                            style="flex gap-2 item-center"
                        >
                            Sign up
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
