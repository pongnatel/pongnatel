import type { NextConfig } from "next";

const repoName = "pongnatel";
const isExport = process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  basePath: "/" + repoName,
  assetPrefix: "/" + repoName + "/",
  devIndicators: false,
  ...(isExport
    ? {
        output: "export",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
        // Server mode: do not set output, trailingSlash, or images.unoptimized
      }),
};

export default nextConfig;
