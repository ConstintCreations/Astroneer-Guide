/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Astroneer-Guide",
  assetPrefix: "/Astroneer-Guide/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;