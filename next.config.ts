import type { NextConfig } from "next";

// Note : `metadataBase` n'est pas une option de next.config — elle est
// définie dans `src/app/layout.tsx` (export `metadata`).
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
