import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.GH_PAGES_BASE_PATH,
  output: "export",
  assetPrefix: process.env.GH_PAGES_BASE_PATH,
};

export default nextConfig;
