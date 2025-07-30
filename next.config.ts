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
        destination: `${process.env.NEXT_PUBLIC_RYBBIT_HOST}/api/script.js`,
      },
      {
        source: "/api/track",
        destination: `${process.env.NEXT_PUBLIC_RYBBIT_HOST}/api/track`,
      },
    ]
  },
};

export default nextConfig;
