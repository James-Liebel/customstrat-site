import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Pin the workspace root: a stray package-lock.json sits at the repo root
// (preserved there for GitHub Pages), and Next 16 / Turbopack would otherwise
// infer that as the project root and fail to resolve pages.
const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Optional: adds trailing slashes to URLs
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
