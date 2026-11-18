import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async rewrites() {
    return [
      {
        source: '/kundan_resume.pdf',
        destination: '/Kundan_Resume.pdf',
      },
      {
        source: '/kundan-resume.pdf',
        destination: '/Kundan_Resume.pdf',
      },
      {
        source: '/resume.pdf',
        destination: '/Kundan_Resume.pdf',
      },
      {
        source: '/resume',
        destination: '/Kundan_Resume.pdf',
      },
    ];
  },
};

export default nextConfig;
