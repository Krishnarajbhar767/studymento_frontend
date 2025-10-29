import { authService } from "@/app/service";
import {
    FailedTokenVerification,
    SuccessTokenVerification,
} from "@/app/(public)/components/auth/token-verfication";

export default async function verifyAccountPage({
    params,
}: {
    params: { token: string };
}) {
    // get token from url
    const { token } = await params;

    const res = await authService.verifyToken(token);

    if (!res.success) return <FailedTokenVerification message={res.message} />;
    return <SuccessTokenVerification />;
}
