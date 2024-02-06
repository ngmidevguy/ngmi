/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      cssProp: true,
    }
  }
}

module.exports = nextConfig
