/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization for static export
    domains: [], // Add any external domains you fetch images from
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Responsive image sizes
    imageSizes: [16, 32, 64, 96, 128, 256, 384], // Generated image sizes
  },
  compress: true, // Enable compression
  poweredByHeader: false, // Remove X-Powered-By header for security
  reactStrictMode: true, // Help identify unsafe practices
};

export default nextConfig;
