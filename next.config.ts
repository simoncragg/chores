import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/chores',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
