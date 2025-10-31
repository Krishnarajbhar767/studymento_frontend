"use client";
import { notFound } from "next/navigation";

export default function layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
