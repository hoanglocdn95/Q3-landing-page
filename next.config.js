/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Cấu hình chia nhỏ các file lớn (SplitChunks)
    config.optimization.splitChunks = {
      chunks: 'all',
      maxSize: 2000000, // tối đa mỗi chunk ~2MB để tránh file > 25MB
    };
    return config;
  },
};

module.exports = nextConfig;
