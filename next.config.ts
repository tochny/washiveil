import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export — the registry is JSON + a prerendered demo; Azure SWA
  // serves the out/ directory. trailingSlash makes every route a directory
  // index so static hosts resolve /zh-tw and /ja without rewrites.
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
