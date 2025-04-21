import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
                {
                  name: 'prefixIds',
                  params: {
                    prefixIds: true,
                    prefixClassNames: false,
                    prefix: (() => {
                      const uniqueId = Date.now();
                      let counter = 0;
                      return () => `icon-${uniqueId}-${counter++}`;
                    })(),
                  },
                },
              ],
            },
          },
        },
      ],
      chunks: 'all',
      maxSize: 2000000,
    });

    return config;
  },
};

export default nextConfig;
