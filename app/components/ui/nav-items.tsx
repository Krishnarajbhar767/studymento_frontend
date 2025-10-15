import { TNavLinks } from "@/app/types/general";
import Link from "next/link";

export default function NavItems({ Links }: { Links: TNavLinks }) {
    return (
        <div>
            {/* Our All Links */}
            <div className="flex gap-4 items-center">
                {Links.map((itm) => (
                    <Link href={itm.href} key={itm.name}>
                        {itm.name}
                    </Link>
                ))}
            </div>
            {/*  Sign Up And Login Container*/}
            <div></div>
        </div>
    );
}
