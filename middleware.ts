// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { TRole } from "./app/types/general";
import { api } from "./app/lib/utils/axios";

export async function middleware(req: NextRequest) {
    // Route that User  Can Access
    const allowedRoutes: Record<TRole, string[]> = {
        student: ["/dashboard/student"],
        admin: ["dashboard/admin"],
        manager: ["/dashboard/manager"],
        mentor: ["/dashboard/mentor"],
    };

    // Base Frontend Url
    const FRONTEND_URL = (process.env.NEXT_PUBLIC_FRONTEND_URL as string) || "";
    // User Requested Url

    const REQUESTED_URL = req.url.replace(FRONTEND_URL, "").toLowerCase();

    const ACCESS_TOKEN = req.cookies?.get("accessToken")?.value;
    const csrfToken = req.cookies?.get("csrfToken")?.value;
    console.log("ACCESSTOKEN COOOKIES =>", ACCESS_TOKEN, csrfToken);
    const ROLE = req.cookies.get("role")?.value as TRole;
    // console.log(
    //     "Printing  Access TOken And Cookies From Cookies",
    //     ACCESS_TOKEN,
    //     ROLE
    // );
    // If Access Token Is Avalaible Then
    if (ACCESS_TOKEN) {
        if (REQUESTED_URL === "/login") {
            return NextResponse.redirect(
                new URL(`/dashboard/${ROLE}`, req.url)
            );
        }
        // get Alllowed User Routes
        const allowed = allowedRoutes[ROLE] || [];
        // Check How Many Pages  User Can Acces
        const canAccess = allowed.some((path) =>
            REQUESTED_URL.startsWith(path)
        );
        if (!canAccess) {
            return NextResponse.redirect(
                new URL(`/dashboard/${ROLE}`, req.url)
            );
        }
    } else {
    }
}

export const config = {
    matcher: ["/dashboard/:path*", "/login"], // run for all paths
};
