import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "github.com",
      "aceternity.com",
      "spotify-github-profile.kittinanx.com",
      "github-readme-stats.vercel.app",
      "media.licdn.com",
    ],
  },
  transpilePackages: ["three"],
};

export default withNextIntl(nextConfig);
