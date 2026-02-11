/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.nuhar.se',
          },
        ],
        destination: 'https://nuhar.se/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
