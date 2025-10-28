import { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    allowedDevOrigins: ["http://3.6.89.140"],
    turbopack: {
        root: __dirname, // use project root
    },
};

export const config = {
    runtime: "nodejs",
};
export default nextConfig;
