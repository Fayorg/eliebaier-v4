import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
        {
            protocol: "https",
            hostname: "eliebaier.fra1.cdn.digitaloceanspaces.com",
            port: "",
            pathname: "/**",
        },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/script.js",
        destination: `https://tracking.eliebaier.ch/api/script.js`,
      },
      {
        source: "/api/track",
        destination: `https://tracking.eliebaier.ch/api/track`,
      },
    ]
  },
};

export default nextConfig;
