// TYPE OF Device
export type DeviceType = "mobile" | "desktop" | "tablet";
export type TNavLinks = { name: string; href: string }[];
export type Role = "admin" | "student" | "manager" | "mentor";
export interface BaseUser {
    _id: string;
    accountType: Role;
    email: string;
    isVerified: boolean;
    isBlocked: boolean;
}
