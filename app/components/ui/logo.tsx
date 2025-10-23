import { useDevice } from "@/app/hooks/useDevice";
import Image from "next/image";
import LOGO from "@/public/white-logo.svg";
import Link from "next/link";
export function Logo() {
    const device = useDevice();
    // Get Logo Size According To Device
    const logoSize = {
        mobile: { width: 200, hieght: 100 },
        desktop: { width: 255, hieght: 40 },
        tablet: { width: 200, hieght: 30 },
    }[device];
    return (
        <>
            <Link href={"/"}>
                <Image
                    src={LOGO}
                    alt="Studymento LOGO"
                    height={logoSize.hieght}
                    width={logoSize.width}
                    className="object-contain"
                />
            </Link>
        </>
    );
}
