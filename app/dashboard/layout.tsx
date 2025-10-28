"use client";
import { notFound } from "next/navigation";
import { useUserStore } from "../store/user.store";

export default function layout({ children }: { children: React.ReactNode }) {
    const { user, accessToken } = useUserStore();
    console.log("User Token", user, accessToken);
    return <>{children}</>;
}
