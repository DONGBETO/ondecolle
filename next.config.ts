/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://votre-domaine.com'),
};

module.exports = nextConfig;
