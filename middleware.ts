// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { api } from "./app/lib/utils/axios";
import { BaseUser, Role } from "./app/types";
import { useUserStore } from "./app/store/auth.store";
export async function middleware(req: NextRequest) {
    // Base FRONTEND_URL
    const FRONTEND_URL = (process.env.NEXT_PUBLIC_FRONTEND_URL as string) || "";
    // User Requested Url
    const REQUESTED_URL = req.url.replace(FRONTEND_URL, "").toLowerCase();
    // Route that User  Can Access
    const allowedRoutes: Record<Role, string[]> = {
        student: ["/dashboard/student"],
        admin: ["dashboard/admin"],
        manager: ["/dashboard/manager"],
        mentor: ["/dashboard/mentor"],
    };

    // 1. Handle Auto Login On First  Load
    //  get user from memory  and accessToken if Both is Not Prasent Then That Means User never Login
    //  get user from memory  and accessToken if Both is Not Prasent Then That Means User never Login
    // 2. Now Check Is User Is Authenticated
    // 3. Check Is User Requested Url Is Allowed For Her Role Or Not ?
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/login",
        "/",
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ], // run for all paths
};
