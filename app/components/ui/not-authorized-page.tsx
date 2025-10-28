"use client";

import { useUserStore } from "@/app/store/user.store";
import Link from "next/link";

export default function NotAuthorizedPage() {
    const { user } = useUserStore();
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
            <h1 className="text-4xl font-bold text-red-600">
                403 - Not Authorized
            </h1>
            <p className="mt-4 text-gray-700">
                You don’t have permission to view this page.
            </p>
            <Link
                href={`/dashboard/${user?.role}`}
                className="mt-6 text-blue-600 hover:underline text-lg"
            >
                Go back to Dashboard
            </Link>
        </main>
    );
}
