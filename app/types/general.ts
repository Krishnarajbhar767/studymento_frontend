// TYPE OF Device
export type DeviceType = "mobile" | "desktop" | "tablet";
export type TNavLinks = { name: string; href: string }[];
export type TRole = "admin" | "student" | "manager" | "mentor";
export interface User {
    id: string;
    name: string;
    role: TRole;
    token: string;
}

// // Api Response
// export type ApiResponse = {
//     success: boolean;
//     message: string;
//     data: any;
// };
