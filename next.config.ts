import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: ['@telegram-apps/telegram-ui', '@telegram-apps/sdk-react'],
};

export default nextConfig;
