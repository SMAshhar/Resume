/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  settings: {
    next: {
      rootDir: 'src/apps/*',
    },
  },
}

module.exports = nextConfig
