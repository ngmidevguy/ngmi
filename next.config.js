
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      cssProp: true,
    }
  },
  images: {
    domains: [
      'ngmi.dev',
      'i.pinimg.com'
    ]
  }
}

export default nextConfig
