/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/what-do-we-do",
        destination: "/",
        permanent: true,
      },
      {
        source: "/projects/FoldenLane",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/projects/TGDAudio",
        destination: "/projects/tdg-audio",
        permanent: true,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
