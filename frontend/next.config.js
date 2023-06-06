/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/gocafe-tw.appspot.com/**',
      },
    ],
  },
}

module.exports = nextConfig
