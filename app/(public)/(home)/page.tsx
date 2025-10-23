"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/app/components/ui/text-input";
import { ILoginFormInput, loginSchema } from "@/app/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDevice } from "@/app/hooks/useDevice";
import { GradientHeading } from "../components/ui/gradient-heading";

import { HomeCourseExplore } from "../components/home/home-course-explore";
import { HomeHero } from "../components/home/home-hero";

export default function Home() {
    return (
        <main className="bg-gradient-to-r from-[#2A292B] to-[#060515]">
            <HomeHero />
            <HomeCourseExplore />
        </main>
    );
}
