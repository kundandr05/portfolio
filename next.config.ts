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
      {
        source: '/projects/college-management-system-lms',
        destination: '/projects/eduagent-adaptive-lms',
      },
      {
        source: '/projects/lms',
        destination: '/projects/eduagent-adaptive-lms',
      },
      {
        source: '/projects/eduagent',
        destination: '/projects/eduagent-adaptive-lms',
      },
      {
        source: '/projects/campusos',
        destination: '/projects/campus-os',
      },
      {
        source: '/paper',
        destination: '/paper.pdf',
      },
      {
        source: '/IJCRT2512785.pdf',
        destination: '/paper.pdf',
      },
    ];
  },
};

export default nextConfig;
