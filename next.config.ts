import { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,

    turbopack: {
        root: __dirname, // use project root
    },
};

export const config = {
    runtime: "nodejs",
};
export default nextConfig;
