import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "eliebaier.fra1.cdn.digitaloceanspaces.com",
            port: "",
            pathname: "/**",
        },
    ],
  },
};

export default nextConfig;
