import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/improvements", destination: "/#plan", permanent: true },
    ];
  },
};

export default nextConfig;
