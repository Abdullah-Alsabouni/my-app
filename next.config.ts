import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true, // Enable the React client and server component compiler
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  allowedDevOrigins: ['172.31.16.129', '10.193.60.176'],
};

export default nextConfig;
