/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "**",
        protocol: "https",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
