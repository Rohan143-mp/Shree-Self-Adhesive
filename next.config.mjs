/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Set basePath and assetPrefix for production
  basePath: process.env.NODE_ENV === 'production' ? '/Shree-Self-Adhesive' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Shree-Self-Adhesive/' : '',

  trailingSlash: true,

  // TypeScript settings
  typescript: {
    ignoreBuildErrors: true,
  },

  // Image settings for static export
  images: {
    unoptimized: true, // Required for GitHub Pages
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },

  // PWA & performance
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Experimental optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // Turbopack (Next.js 16 default)
  turbopack: {},

  // Webpack bundle optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: 10,
            },
          },
        },
      }
    }
    return config
  },
}

export default nextConfig
