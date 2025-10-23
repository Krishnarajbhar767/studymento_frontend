import { NextRequest, NextResponse } from "next/server";
import { api } from "./utils/axios";
import next from "next";
export default async function tryAutoLogin(req: NextRequest) {
    // Get Access Token And User From Cookies
    const accessToken = req.cookies.get("accessToken");
    const user = req.cookies.get("user");

    // if not  cookies And User then try to call refresh  the token
    if (!user && !accessToken) {
        try {
            await api.post("/refresh");
        } catch (error) {}
    }

    return NextResponse.next();
    // If Token Exit  Then Goo Ahead
}
