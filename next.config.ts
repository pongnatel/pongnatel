import type { NextConfig } from "next";

const repoName = "pongnatel";

const nextConfig: NextConfig = {
  basePath: "/" + repoName,
  assetPrefix: "/" + repoName + "/",
  devIndicators: false,

  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
