import { api } from "@/app/lib/utils/axios";
import { ApiResponse } from "@/app/types/general";
import toast from "react-hot-toast";
import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { AUTH_EP } from "@/app/lib/endpoints";

export default async function verifyAccountPage({
    params,
}: {
    params: { token: string };
}) {
    // get token from url
    const { token } = await params;
    try {
        const res: ApiResponse = await api.post(AUTH_EP.verifyToken(token));
        if (res?.success) {
            return <SuccessVerification />;
        } else return <FailedVerification />;
    } catch (err: unknown) {
        const error = err as { message: string };
        return <FailedVerification message={error?.message} />;
    }
}

export function SuccessVerification() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[60vh] text-center text-green-700 boxed">
            <CheckCircle className="w-16 h-16 text-green-500" />
            <h2 className="mt-4 text-2xl font-semibold">
                Your account has been verified successfully!
            </h2>
            <p className="mt-2 text-lg">
                You can now{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                    log in
                </Link>{" "}
                to continue.
            </p>
        </main>
    );
}

export function FailedVerification({ message }: { message?: string }) {
    return (
        <main className="boxed flex flex-col items-center justify-center min-h-[60vh] text-center text-red-700">
            <XCircle className="w-16 h-16 text-red-500" />
            <h2 className="mt-4 text-2xl font-semibold">
                Account verification failed
            </h2>
            <p className="mt-2 text-lg">
                {message ||
                    "Please check your verification link or contact support."}
            </p>
        </main>
    );
}
