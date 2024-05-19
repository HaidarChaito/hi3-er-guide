const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hi3er.tech',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.hi3er.tech',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images-ext-2.discordapp.net',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
